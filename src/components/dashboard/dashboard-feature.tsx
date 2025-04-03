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
    "uUwBMqkPvwbEkqRb4hbdaCmUb6yJgyWtSYHUZaM6xp86G1Wtpf1VWyuGXBYZCT7LvBk72LNwMGGuTLBrBFjRXrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKp9WcT3TpFbtyPL5e3a3p5hCDTdW1Mzooaj52iznGBnSVrVCL6Zg91C9g5j78hSjnYzXKJZLyhvbzwLLtScw3D",
  "key1": "3Diwjpd7neMuvTALC37Hrpmby6RYJW4pZkPrgtAuUNVMrRhvDtiCVrv1R6tLmDhEEEwsK6XrJtZvFcJe6ofegzar",
  "key2": "2U6qZRayh2wq3U1WwuMyBiCMjPSFMB5CxqToRHRT4TKRsF2Tjk1vsJKrbtZYdBd3u99wnsmdfmMizWmZprY2PudU",
  "key3": "5g9FaLaAibg4uhuQh6v9hnq3TW7ff8Um5Nw412caRWVRxSsCWydzwdV2ViwehjxZLPfgH1MKQPX2ULu12cUo4NCD",
  "key4": "32uhYhDXMzYvu78dcy7qcbi6eTeVG3QXMsE4z1JWoiAJBPUNkTD45K23vrxmRcUfgMyTvmnfUWsQk3RnX9Xzvf2e",
  "key5": "4kvSLrJDd1h3AEkwe1fLB8biCt59N9dbLUSv5SF8UcSvmXZUUUFvMQR3cYDNE8cPM3NU91MA2zmX31umtKwL2ig7",
  "key6": "3c4Y3RungX5WeULxCcDNJd8QMdEPXW9WgAWmPKhZneYRn2DmW8HVogXd6WNRADwLRcSyY2kdhHLTcovNu6gQ734R",
  "key7": "3pQxoR2GGyGEg2PshrzRjyQtML4DCCrfgod6ri8WiuvnmM6zQ61kYYZtk9eaVABsUnFdWKffCq7FMKa5RGQwp7T9",
  "key8": "3SocGB9J1QJSDMFGzZ2DNmRFJXcse38Yu1orkX874DTEJvajjcvatpNamoEF5e4ijXL5DrMWCu4txrDMEKoUmeNm",
  "key9": "2j4DjhpeMGFyWBmZgLfcmLBNzL4wqb3it5HnzQYB8FkintRufTCGmYH3avU7kJZXwb6uzKUM1qAoKAkN8FiRMJdF",
  "key10": "26KTPRsiGDrHg2pWgNSb4yohmKWTvcDCoV889fFeMozpeqrw7hiTpqz7xSjqLwBxa7UGYt3wFtyATwfsryDqtNy5",
  "key11": "54tfVW5BpGjp8UgNNpFLY9rrs7C5WeVNdpiegDHjhzapApz856Jcngv6bCxaZpiFRkTrC1teHjd3quM61XrzVx7X",
  "key12": "67AHjXuRgSF4ojCNkb7irgv5aEJryKQvhtB69aAhWtW1fDQ9xPkT2XuSpUnY7BPTmh9vkJjyF6V5hwLsUmo1Tzxn",
  "key13": "3ZSjiJ4foNhmTybmEutr7bFTEtcCLYMGJByKoRqvhbKmYrEE4ce6dGcNDdzkPBMGWrANrgvERqRDAcDTh8A6yCPc",
  "key14": "5mtfF6FQtGFWz8hXS2SZ9weDn1o4ceEYjK3A9Lh5jSk68FvY1NbzyYacs38HAMKPBDpByo2jXvEgFcV8wcBbo2Qj",
  "key15": "5xqkbXVWo8gPq7D3ewirBARteW2WyER1wr6UD9WSfEosU5HJW8tvjMF1ebfLwQ3rV69cpz6fkaV4KuAAnC54nfet",
  "key16": "FkwjbWEEcpSbAWGj6jHH5kkspW8iNKUYZQcJsqdVJL8cf2rS5aPbzWo1qoruF88dwNb8CMRBXuCe8EoaauUAfFv",
  "key17": "yNpbCsGG78qcgWnYdJ9RbBz8fKhB58GUfHU1cJoqM9f4rpUnsEMhHiMn7JogruCW3XX1sbPXsz4LMvWrn8rKQuH",
  "key18": "4ZwizxpKB5zAkZDnWJwoeye6PiDT7W9P3PgaFcS8ZLvLE6tsk1HwsCrZPk3zW5VJ4sXajTSGQYBsi3h6RxJaFxKd",
  "key19": "45XfKkKNF9PhKdjgmdwrZGxk7nNG7Kb6YnMxLMxrfikVw6Tj7zB8fVMwdEidXzzqaagcDGxL1LN9oc67Us7yCbpj",
  "key20": "4G8PSwvn7rbWN83fgLqguzGD4QhsVzy2jGqF2RWc79JAMzJGCr2LuYM8JVNoVaKKXKghhSBSVCjXEZS5LMoR7CMu",
  "key21": "4DpBRTQUo3h4A6KgrQqgEk65KQhERJtraGTHVzCSo6o94GH7we6KtsA28PWsNKXQu91dM5G5RCTwYyedUT2R1qoa",
  "key22": "5vgmHg3cBsPskV8sLeDHLhq4xkFYYyBxYkWNLpk7iQUAbGgyWq3JFj1EMdMfR74wAqTFmEX3fE5SyV2rkApu9tVT",
  "key23": "2CE3noHvtPvyX1EZeyT2qDdKhUJh6qDaU6EmFnw2qeh7MLiyU7Re8ZgonbSRV12BXa8BWhbPfVHqye537r5A2n1C",
  "key24": "3du55aEuTD5YtMrjP393EyKuB1gTED8qs8fMV7jZ8EPcsNM2ps9jxMZYosjAB4D5G4yqdgKBJB1BQoPuhfZ65SYp",
  "key25": "nvgt4eioyDAJWLonnubKhphZF2gZhUg2SG8H5EffoK8QrmfxrcPkpMp6KaHy6179sMyFjqAg73uUkeh9ySaTmfE",
  "key26": "223cUoVpRoGM3biUwX2hmLYMWtk4LMoaeQTBWW1ap2CXvn1L5YLccJ8xRoaMFSzpXtLH4rX9T11VnEesAz4XGSwB",
  "key27": "5AGrtq29iA8Vh6rctaaq3Ba7LYQQsWRGx7P9YwgvveT7ePFc1Aj7WQHKwY1JVBUiw3i98c5bAoFgGn48GTxuCfTS",
  "key28": "42XLPRexvL62XupMGqMk5sFj35QG2TzugyLJxKrExREMsHjDXE1kK2rErCQ12YXuDZNCQcpPXwwPdANe4bWBErbJ"
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
