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
    "3M3cCP9r1dbRHk9AVQ9zjr5o5qJoDpo5VcNgr33SnqV5kkpSz34XbfHcE833bvULFvoYBPtmVchMEw55qVrFoJNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihFfKFzYtWjkskc8L8gtrFhdcsySMGLMDzGmo9QX3XGsTR6SEcYZb2FQJBZS73LbSbM1aQF7pE3fY2tihM3ybts",
  "key1": "5RFnZZF68khQJN3JsHz73rzyJt2JrKNWijD4mgA2dZnsHHgGAedQF4UFUh4ZPEzLuXgs5YRxYMsXMadn4CCWrTHG",
  "key2": "4gBhrgZwxfdpx4MGiLp2xfaDVCbFfURjQcLUEVFnPDU7o6Wf7BaPkc29Re67WTTEkHcSmm488j9FyYywwCgfCyDp",
  "key3": "5EnwEXrtPsCgPRTPxkaC7nDbeeommK7qHqWZo7icLBJ3xx7RywRuUHSezmrPEVufueXZyPUGanfqmDpdEoenntce",
  "key4": "4UvbFjWmaaskupvSsa6mmSEKXu6kXiMK24GLCE2NSQdCd2aCd5bHybz6nhSKfm2GbLfnHFhPvoSbojVkerH3iG9J",
  "key5": "3YBpi15h2rBJAri4nWaRzYmcgzxjQzz3qD8WePZ4qQKVM1CoxEzgxwuMFrxG56MmbKW4pKiKNB5xm8hAiypu5NZL",
  "key6": "HJWGK7Q4kj5XD7mfUjpqJkGERsd9TWFVPX3vqCB7Ui6MsJfu5nwmwPwY1c9am26TMhLYsuZC2Q5VhS6w7yhAyHE",
  "key7": "5TNJi4deBVejsTgjwQC8nLGZx8zq7zRQTK6Ga317PiaiwFtgopbve76CQuV8wrp5Rod5Ug3WwFDSMLJYVh4w6URv",
  "key8": "2ehJYMY9gAgBu9GnanjL61bPvMGeiFHwPSSsTJXgmhu7EC8GDPAovLwodStDnyjszcSMpFTM1UmGm359Be7UacCS",
  "key9": "36BYkUaVgtGpG5BJLDLNDvrVrkLyzDfsiAF5MaE8Hk2HoWq4wVyrH6Sp7EhStdRBE6U9FZRifLe2cJrYTWtCvU4X",
  "key10": "2ffTDCqoccsHMbotBy3CsM56NKAFDu96dBN85ZV27HSTdspH3MnUcv5oXxxiqu4HEhV554BNw8hquj3Fez6jK4Hy",
  "key11": "5G1c7mkybydJU65TUd3faQYwQt3DvD5S35EgSV748d7x5kLZ1WaBVkNfxUD2Q4XjwgYGGVf7eoQW9727rymcej3Z",
  "key12": "4ma8FmFbfaPHiqMNxBEdTkqfgyk8eMK7Hivnwgk14FfYjszqcbKG8BPZjtsyu29uTrfe46tMSUXjnza7GKPMqoQn",
  "key13": "3DDhW9ciJp7RAe1emxXsXfFxfossUVTf6mf9ZQ4974gXrqrkXHDqQi4Ka3KJzE2uHKcb2Kdn2fst16tPrnqQLbRU",
  "key14": "5nwkzTfgBBT4qaRYwtgyXPvTFYZ8QeMYgnVXcBjf51ry35EZLbvMwfobV3yALaLPD6bGTAeJ1NEfk7iPRSitRSP4",
  "key15": "35FUDDvrXto9MZoFYmaR9MBXB4ktjn8E2mLHeMjfRURmTLNRuT93j9UjbWeJmEMGNZ7ghK2p18osDzfhcfM1FSXB",
  "key16": "3m1r6CLZQSNHjjkTgnuArWX1UWPAonMt4wCA2H4V6HHycYxWQu9T3UWKoBZVTz8wLu2oULPRp3AQ36dMLyiJU8Er",
  "key17": "5XYLZSv5PvrzSj1DKSNAYCxn6hp6F9sy4sTJ42SZzA5Fmg9YLSeMjNFYJp5fxobMMJoMBdfjULMoz4E6kqosW6k2",
  "key18": "4XXRGQSHDzXcVsWzwwaBUGqa9hSapL4FBofVkXqyfEMpxvwwrR3ZHKRF8SHiDd5LnMCKMf9cuofmpqx3KCmLmWUf",
  "key19": "2DFDeCeMZ8wZVDXnkkVoMjhYyrB2wKxAS85GpfKWnCw8rVzz7zqxUDjLsvXFLXaDKSqA9bLADwxMY8sPqoogaUHp",
  "key20": "47S4iF5xK7sfpJ2C1zsS8PqQufxLPX6fiEEKYGm3rfsoVPUwxqbTfp3GaZQNoiZGwSsChubeg3PiCeS3Hae1BRRs",
  "key21": "fYXf4GM1VWiRBGzajRDjiPzXY3vmL2iaHuS1xSx7vucKxdhZzdXnJbGErtWvZVZUi28sHHNBWSXBrWz6zC9pibb",
  "key22": "2rjHAojiausaCNe1GqZ6xbywHWchwhkhVMEVFa2mmabgqbH7bMYMSqWdHaoRLygCJXCf8vyGsCVpcv8rnP3MFWdv",
  "key23": "6793zLqLy51RgLJZ37McvNQ9tA2spgAysEPiPgbLMbTfKFZvpJS9s5pyZhoFvcnn8azekYcfJttFpPUxXhbXMC4r",
  "key24": "3DZMpHXPXFMgrCd3E74UJad3exNBXCxLdNeD723864gs4jpGSKSjJ81EUhGh7bGxQkZ5wDu4WjjTFWNEPXXjrusS",
  "key25": "46asAuc33rHCydrYtcfnR91zMovrscHxb2nJANf3yMHRKfpDTcRUPtXKh6Dc8hx9ZKkbaXCqAcLrkeaqwkfYZThz",
  "key26": "4JZyhSozR6HftHTfBKFLCTwkNcSXwNxbNh1KKpRwseuPTy9b6EQrZSzvCGfV8iQhtEXryfrBAjEUGfTVToJ5WQer",
  "key27": "4hyJPnyzRJSNPdjs5Eiu84Ydk97afYEjaXvDjL7vmn2xZE9TodyY3GbbtARs82MnEuH26YRVV6qGTh8hVewWtH9a",
  "key28": "31ok5xT75LUf4YgcQU7gKhfx5HwfgZfC9pSn4nbEDV5HbPLFLnBhCmMdwyoS7CJ2VSGzXFazPXmpSdtKmMm45Wt9",
  "key29": "3CbFk94BVAntwoHx27TcUzmFMMcASkAYrnDjd4Cw28cPF4mMcWTemyMkHspCAe9Y4QioMtatDpqCyMzPAYAVy8JM",
  "key30": "3gJw8MYniKQ4pyX5KmoUiYPmxrEthdTqeX9XaYDAo5Z7Q1Sf3XrqKfqT75Um8XPErsruWY4b6hy98WQqtMhDGjDM",
  "key31": "BPXGGxeYZKVjBEWn8aPSwFvCBmcPufY1eR3aMtPKhUPVcYRqgVsNCEKJaq53N9BQgKPDsJq1ttWXQNxG6tzZyJY",
  "key32": "2kqrqQWrbKANaGDa2JDWrjQLstZ48MDmPrVsESp3xquyG6kaLvSWrHN2L4w93N6sxqv3He8zSQ9Lm1LtjFesDnLW",
  "key33": "B4SLNFi47TciKDBpLjnaU9XdF53CTLTBgN7kdUnfYZXhbC3hWrAQbSdTkkhCjPG2e49TcL2XEoe1byLxih4wYaZ",
  "key34": "2uFUbi1H2vgr2N8yM9aRHAsRVCF9byiEBwrrabrbEA8p4qUDkd62NsqeN1owSU4Y6XCE9AFf9arrt9WzhieyCNrN",
  "key35": "3tEjxaXfxjT5LHRDMiSaLBRKEUABSkFrK9GSWhXu6xyKhXTVqxsjuXUGhmt1j8BZYYAqAavbaxHRnyseYeH4MRdC",
  "key36": "a1mzXicwMfLh2sAH4XphnR8JBR2HceMfw9SPYFZwS7TPuU3UtoZDpoZvPQb5eJPPvJTQXHSzzf4FqYZUFF4geCk",
  "key37": "5GmDU1mCvFSrFi76HWnjcjEZoVEQYEjVc82DcUMf8MuBxUoWf9FtebaEU6QZwSKMzVMvc7r4qARTRSSpbCR2dPTK",
  "key38": "2sKbsXSNjPvDTPisPeZezCNBb7wG7txes8HACwkQB6VF5ti7F64Upd4grMorBHFm6juhmrtm9zGxibF6ecHnqefz",
  "key39": "2ooK5AxVuR4xEatWWiQRzXUE9Ksed4VTVBAC2xhSroVsycGoLK6Jt6ixhBB7z59WERUg4iediM6Ddgbn34SR7WfP",
  "key40": "3JbuCM3rVqDyH4dxfcgCyCJBfpVKoS78psPQf9fczquejSuPS1a9XUJ6g2HXrLspV5CH7YDfoQmDRkohXMeJurki",
  "key41": "4uM9miKyCYnNFCPSEUSHS72y2j4GWwxr1XebayjnH569nPFTfFUHX56WEnnmeMrLJ3r3umYfhWHTFdCTqTyZFnJo",
  "key42": "2Wf5aubxNqQoiy1cQz1DEhQ1CswzgPXu85tEhJMELMDny2Vr5w2khFG4SSLdzKVY1rnrXCwoyHe6DHVvuQxBs2pY",
  "key43": "3EdZoembWobfnxkYJrpCqV1mLNhETvhRBdmKu6Z2pP6V8qY8rejFjMNG76cNuqsq9WvAbyZf9WiKpjjJFCAtjAA",
  "key44": "5TTEbyFXoh7kfkthHCraD9yoJW5G3oq4bbE3CxhRNhbzSzLaAnHzfwjDUUpg58crTMEGTiBorHojonAroz76CvH5",
  "key45": "5EiLMMsrJsXApYsM4vtUGhaBjtpeG9RqZxKyukDzYGg8KT8xSsZzqdcJk5MtaTyStZUm5GoE13vy8F8i4rtn3aon",
  "key46": "2e3aqcEAUgSMQ6a1CubEHojZ9EAg7qd4vz86ifezZKBVrtDa5z1MyeCReaCsEpdLKgZ2MP5xyu3eA7XquEW1FY9e",
  "key47": "3e32UrtbZyETZjwF9eFjwErEcPSGXThiXC5KKviFZ93RNmggHmKj7ZXcq9PkMax9nq4xx5Z5LMXzjmgni6ydXt2m",
  "key48": "yyu9AyHfN3siL52Kya3KQ1H51AzqfQVpCcnTLcU1feBjBihk9Cqv4F5UEnPV2arXSCB492LoQ2ZorJWYU7VvFhk",
  "key49": "2pd85m8Sbtnhy7pF7WakvCnjk4CYsxcRoQikaK6D9wr75vQCPkcSfHrjKcsPkFsj5ViQ6wv3LhFQYyrN1RcnMJZP"
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
