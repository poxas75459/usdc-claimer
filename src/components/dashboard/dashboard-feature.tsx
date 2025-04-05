/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2qR2uFSTTRRftTBdskcnEKrnMcTkZwbSg3pWowbkaq8jy9Heez1YRv2NYvt9VxEVZkcncw2D85uVTwmtEhhqXQDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PveW3CRxo1suNHcjA2rQFPf66HfW8VBDChimtZYf2ST3V2Un3sBE1WwxJcahXwVc52SCC6aZ8sqWFYZmCAcme4m",
  "key1": "3LQoAprq9Q5fQDVuZWtSpUpC6kkHy3FxZt33hmCHWM1Gum2yepRrZeqeCP4VKAv49ghWSys6sfM8FYWG9nVYM2od",
  "key2": "5Enpt2Jz13M68pBXX1qLXU8GEHLfJ1EtcggXGg9A9rb2x4NgSxKHNRCpixYXu4WHuMv9zVMsSMQ7U2iL8kXcqdtL",
  "key3": "4nastRDvX6PxdbYjztcLTAPmHJ1HnNs2oij5cC3PSy9n2huG6K2uXQpNQvH71FzLWXKiFuCwLujYSM7Y3z2DLLfB",
  "key4": "73xqEXdBKWyCYkiwpZDQ1rGWHW5gBVRK4bprWQ123UvHSsZSFZt2yXPkrHM3qszRDD6ed5cJazz374RQNMoUTaS",
  "key5": "39nMRPuZkxHukpb4qX7cu9jW8NwMrN1c6BRJ2PF5asCEWT2aAb3kigQ1rsRJfoLXm5B1dMryycHXM3X87n9vZuvY",
  "key6": "CqTMGDyX1U5zxdrmDwEi1LtrgEifr5rcAb289UFqDRDabp752xRGGnzQdujhL8Cg1r52sU8Gp1ptgSg5hog8kGC",
  "key7": "3XPH3yuEksLQiGjuXSbGwyy9zwTHdf1j3fxY8ffFmRFkcaujQLBLs6xUMrJ9WtfE6t4aB2oDuJzRGK9ryVbh9s3x",
  "key8": "3gwNEPzVk6bVRLw7BBA3HtqHvgB3GuuT6yya5HoGKofAGTCecqweH7Nur4vP5HPCvXft9qMmLy8KrVqZgMdWHX67",
  "key9": "2xcVjkUxAxQHRCoErAZFar83iu8VnWTDhg3qW8JT2pjkSuA4boAkMpmvjwCYr5vjHUnCqcTRHR1V6XxRLaH1qe6e",
  "key10": "2gnJYAoGtbYoNJxXdeBuSNdnE82y1MjZenC8yh6ZSWCFxsH51UqBFdscWbmxCtWrP6uyCoEmJnFA4UgEp3X75Sti",
  "key11": "2JCqT8kYgcxqpJrML63h6PCFHXSskKeTSjYkHFLXt8jdCHCCpPJsTjaXJh4PmQiSxCzUPKX1gguAaVqyJpB75SVG",
  "key12": "gx9iFPKEMpGzByDZYVo5dpMxNZ11MLSwJGvf5TFvv58Xsunft7K5Sh3LHAo7GRT7zeVJ4Pa4zk5CaJ7sPfZxJwA",
  "key13": "2Hhu6bCxQXnWMgBavE8eDQdJQurTuqGgH5c1AuRY2rdjoUnCK6Y14kpnA46p8RwbJjusegVZtymarKqP24KKQsLh",
  "key14": "2jxJJEchFAsGEoBjE8opSpreXRpCiia2wWutaG8oeeTk6QsaBorz4wZAnEXfrZ3CY6YSconUtgrJuESPpZGutsr",
  "key15": "3bBqPXaN4VStWrDFXnzFavbBz3ccdYgiB8HHMC9uzRTGtCEr3EXougoJUYmXDQdcqfVCgCqb5GBKP4PWueEENEeq",
  "key16": "3tDMac3AkXJPYKEQYyDqyJeP8toaVMvyJ3AtbZPPQpWkwrreCNgEdj5oEqFcWxG66s98n7tfNvN7s8PmJrHPNkn4",
  "key17": "5crfGVwfxEWeCArhn4idVhk8YRTtWALQJHrurMC5tKH2qZDBWe7bXQxX1cQBAzUiEiwEdCSTBDUfAYn5Roas36Ac",
  "key18": "2WLxHUhLuaZKAuBAm3cpHKrnRRbz6WzmH36kAWGD2SwU8cv9GHDjoso4AJD6ynybrqEHiCawqbjkJyu1n4CHtV4Z",
  "key19": "5K2WYe8dFLHkouNPAntiw6Ys5fiwUZenBR4ufPL9ZiUmUe22Qq3SwSjnArceBubU8HTZKNQBRt4nMn7qxL5DHxoq",
  "key20": "5uKZ4iMBtWSu2rz49LArM4vnPBy669tGUME4BLnR5eJqaWJhSMXTiifHiqYZgiFLKaVPg8iphigXAzpsoyhMpTE2",
  "key21": "4HjLAjkLLVRjV5EnK6e3oLRx3MxzwvEmyiuy9ZqeVk1gdNxGnkSjcaNH5hHq6a8pkJ1XV2sPJH7bNzEUDJSVRbL5",
  "key22": "7tvYvL6MuZQh2LCXPgwSpyQZwaihGaQiFZh1dWVQgToyF3kxVaFCDVJCikUQpqtEKPJwdtVbGh2VESWvUcR4fvt",
  "key23": "54VZs1yryVTaGVvtkKpPWgzUfvrYavjNJtc9bzd1JLChemE87CZgP1iCt4kjxmmEVVJoBScn1y67nGfbH717SWnE",
  "key24": "4umCvtRAscuaUAJSZMVM4DV8NtHnQvHoJUNhStLMreZPmf5ic2mXEKh2kZLUmDxD1CqmKmby4YsybUg6USBCQht9",
  "key25": "45r5Q7U11mUkL134gXQ3MXSWBfXXYWhNWRy3xXJmGxtTLt7Lu7DsUPNVQr4x313Lv3mGjTs1g8wSdeMisnCQc6Sw",
  "key26": "41QC8sp3iqCQkpmcWWHik4F3ZW4p87P47JpZKwLShxcPmuPWohoMSQ9r6YYE8jmmuNoiRkneQneccYfeaPzeqf5Y",
  "key27": "26NUqJ3HeZ4PCvToxz7muF57aq58xfnonHukQGUGVGrLhZS9TgxXQ8DBVmsjUndNzDG5WgMTpjwwFZ89tUpRLrWV",
  "key28": "tJTmmu6Z5ZRiZaPwVMLzcxjPqHutUpprXWN4WG3nAwUXoa1mFrHiQpcbmbRtWL8wCUNXvKfk5eJsQqQqJydhiVu",
  "key29": "3W85fo25td6UW9kB6PaDkciLrS8Z5F7HhMsj4WVT5RYPsZndXhwzF2wYYVSXDjg2SR4jWZPQDGtGdx3UzeoM8eL1",
  "key30": "2aWLqe2wJ3dx7XaBtJGpSuKKmEC7DXtxjGVUZWhRDXoFXGJny5qvnMfhaZ1xe4EZss7oSMhaV9pyqFjxhfEkHBUs",
  "key31": "3swwRCoPajFkWoiPbrUqHSqnSVmR54soRuKkfhNAVubYdNdff4T45kcLvHYtNTQYhsQWT7waBCuP1H3hhi7pkV5Y",
  "key32": "4Q8baj2LMfhc7bzENyhwdNbx7tivUdfZxZgLQNV7wGo3dEqQ4sW85jn6vfchMPnjoJEZsanWXUxYosYhNeMuFZoH",
  "key33": "426umSJopJdubrJb7xhEycsVzD9ZB68xnyzwv72LkXRc9hEYbUnH8y5rSZVeQc8jfKAR23tJTC5kFuZf4FjRNtG4",
  "key34": "2tQjsJKed9jkSVkEp2LkPXKFEWS1cTqb8Bt6h8iUCzVqAtjF7AYMu1ZY2qtrLM1ibBLYBxuNt8Gw5mzbaexGnyiv",
  "key35": "4UJQSEM16Ypz8s7CFLrUo321kBic1J9uLkgYa5UpYCwrpxwuKevo6JjbBrLxfrrpvPhJN8unxkpfsbyK3kETwSix",
  "key36": "3xkSZWp3BNFXoewsGBtAP5m3eQTuPUzUcimw2EvdGsU2iD4ummUL6YdXwDjAdu98Jz4Z4p69F9kXSQsZnGbiHf1x",
  "key37": "836reqG8TUznRUcgBoZpkv98VyWKnebvbTabHn4gW2byRvB4xotqJymjgtSpmhC3ues2JjVKFPTSg8Z7vVzKGvZ",
  "key38": "eY7Aa3ygjRqJruSU9W8edoMt6UvQEDHngQD7vZdjmUwdpEXZPbnPA5YGErmrCSwXRDpQ4su67HVxxpMCVdst3Fz",
  "key39": "5gKhMqS7yBLJkgC3DbAysyfbYcJaAnCysT1gLaYkXi83JFgtSUEpS6vMAPzXp1euz8XGQ1mMQvQ78Fi5KFtFR6Hn",
  "key40": "42tEuGVYyzYx68VvoddNSbvHHXhEwZdcHftWomd2jhmYEnJ3H9GXZh1acBqWKmZAk6xeNaRPBxfjcjFfyLfvW41a",
  "key41": "2M9JkmiBAvZjGATDEdLcc7VC81RDj9SHwHQ3gJwcczQdNjVsPkBfdLWBpbQ5dNuuGD1MQmwSdqvVgSW6iZWab35x",
  "key42": "2ApSas1eRm7xe8fyzYV46WmZBkWnCUyDcAzvtWMrwBEq3qc8SBdjTK12fp9YzypbSiUssperJJL8B1EJRoUBgYei",
  "key43": "5Sszyv3jiAJGo4ySiYTroGomDGjKS4qA7j2Q45cvSRsYDa1ky6jckLHSLsGbVq9n6oS5PJxwKmhVph4CbWLVrhkx",
  "key44": "4gBhvsTkeikjTsmTnS8gkPmgYR1PmKvxGaQgtHcFHy3WP8b9UaLjo5C5TZcp63oEx2yoBzoAS3wqX7Ue7eaiPMY5",
  "key45": "5TwRkwugbhzzZexeX9VFmyyQj9TWLwz4weFgkU6RbVt4PN7C8sD8pAXTYiRqjtmRnwrCv1Mvh2tXr5iFVGwqUte7",
  "key46": "FfGojrqtfwTrQHWKf8sMQmzfyqE9G6nv5XAoqs8qDXkLFhdYeYt5iLniQ5DMGyuAwfzTLMNEdGHJ76wDyDQSoQi",
  "key47": "2WqBdFeUAPcYgH1R4UJzEBihGhFcgS984rmHty13f533mU6V1Ss3Jy6dApX979KvbJHc8aP8BJFchCYohXzqYdTF",
  "key48": "uNkjm1PDcYep7z9CsAK3gugMrkijGzFmNaUhzLdYgCkpncUmJEVg4V34nRkSKUG5a85gWz1RLsXk4iTqPWpgJop",
  "key49": "2kL1EXPMJfxTU3zdV5MqkdPsVYj1t3senVewENh122uw3XqFGZCQsikv7h6aiKGLqMmAS6YDHp4XdmJiSevjeqy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
