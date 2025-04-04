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
    "3DziBnriFLyNtcYYeik7ZR8RFb6YtM2PbK2Fo3yMLxe8heMj82CDb7GXH2qcBQxJQnKDT1QsZ1TSxmmETKmDD5N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i9siXJRceaKwXZzHPgTSm4LWf11wRuzCDnZvYA1eoEsbiVBg1SCrpChtuCKcspKdFzuKkRaHNuJap8E8sYp6K5p",
  "key1": "53Ck1A99JKR3MEaD1SJCHzwxzbvxGzwuiSqPqEdjuCqxqMbu9sAr5wgCwmtG9gmMoL9WEBKbDVSNyKpsj4GKG8Pn",
  "key2": "2e1Bq4sJhMKau1U89ccdnDN8oR6VdLM2ux95tKRLNKFyD1wJxWGg8nSFChYFPY5pdWtc58fgBpwDr7SQYnZVARFV",
  "key3": "42u2FGgnq24BPpGQpKZCrKEr7acAWQCQXqfvZYkY9nWSRgotve4mb97654FcdMwLVvzNxc6x3a9EArqMgYZjmip1",
  "key4": "4R9aSE5LRttZ2X1Z34N1gsFaKoMi9Wco5h1EpmC1zYQzEeTbinoPe1PeYVA1HCvfgMDTFpfAXbch7gR8RSFisvor",
  "key5": "5hh6NtDQzxuf3ezy9nQTGt6MDVbPw66fQ7SLRo1JQeD1L5XSGHaELNv3zqKopkKQK6HKvKYTYcbpnu9AS2rUsyxx",
  "key6": "5jccisBQpkqYvksMMd8p9nakSmQef7Dh8qovVYVCwicc4uC1Vfc5NX41zpb6fAme4CNnnoYSXPdbtTbjSJE3s3vE",
  "key7": "3yc4BoLViWNkQuqMLQniHn8CJqFLNgHzBBwkNGezbpyRFVvybgkiuVZwoBpr58N1vfoixDVngRWXi3fwJLPUD7b5",
  "key8": "5d14d7hjZagHnHjFTRqZM5Nwb2cMwfpyw4Hh46gKnyrwaupihnEJPGeXFUepUzv1Bf9BJo614cs2Wa9f9qXeCgeK",
  "key9": "2CxPFYSQtdq4bhbau91rBn3z162hv4RpVyyA3wxXdQdgGbktmiUPuHptBtpTkDMkXoJdhMu2h52vpjFJDDSL39wM",
  "key10": "5hG5baSTmoNPujmEs8VMimH7bAXShwTCk7FbCETYa6cr8H1XZizB1Qd4vF1C5bqAckjWtkzvcWMU4VigPfcTXQLr",
  "key11": "of5GbCusX6ys3WjwR9CmTm63gPw4oqgXCPTozzbMEmjfe17U4sSumiYdWCprjq1P7p5f8wqgP6K3osa1bTaKrcK",
  "key12": "5n9mWgSJttnZFudZveBmosjGGiPmA1WxdBa5gqm9vcEammTzmVDJuR5C9phJctHCPGbiwXGvQWjQyfsPRF9BeMgv",
  "key13": "3n8DkrrwDrWD5siND3ePQHUe9ddE7CYK8fJ5WvsNNybnToz6JiUBnNBhua2MPfkLHnQq1RqVBWmu8Rqg52hdYtt7",
  "key14": "5oNXBCKciPiM56oiXbSgnQJXFJb6AdUnntKGiRAhDcA8yvzZNmrpjdvGb5chHEKcVJdKoQyL6zkkjYPMZavgM1As",
  "key15": "3KPcoQ21kBpYCQpTSyGG7DgQGVHiHZuKKybUhPtjzCiTi2LTXvZAcqGZ8YSJPfhaoQsrTfvEss6sLWMEUsBTViow",
  "key16": "2CvaiZTyYWg9Fe1aC96qSmTzC4r6Mcw9rJb1kzX79rEqLfmdctW2smWaw9NvmjwcuotHKhhzRRLE81kC9Pn8633T",
  "key17": "2ug6Mk54cfnmjM4qek5cLi2uka6DnfKM5cZPvcV6ukAoDWVdkirReNxjZpaqhCrco8RYbMxGHHsbghjUdd9CQz8A",
  "key18": "b6DVycBRB84WrEQCpQTQ8Y61E34zjPWh9r4gBh4hKeb4mqMjWSXtRF7MQa4D6HGgjoMeeBdVPw9fKRwCJ56J2Xj",
  "key19": "3r1tX3abKCoUGbyK3YbdPC58k6GWezRWmvHErzFPx1B4bXCs6jsHUMG2rHE8chtNhT1qB8v53qFKecqf1qybboVn",
  "key20": "48eXK43qPWeANkRMgTZE5EXUvqkc3Uo8o8NGCWQHReUSoi35GterFt3eRzheKy2zYPks1w2Y5yXXmhoRab95BFaM",
  "key21": "5YBQV188tzXURpMcCrnqECugGfCHTc8YhW6zaCSBS18DWgVfbx1vszTuutGiyZZUwBh5c7SsgN4XuiaLUpLMKDiF",
  "key22": "vedNn9p1oCPYrsyKD6ifDNpQAwLjg1TiBUosv8R4u8AbDPAiUvxJtFvejHdEHKj1inaGbXC1fFfRhWAmU1KYP9Y",
  "key23": "JjRxxJgNvLjQTSQm8PJz1wLLAeVnP3v1AkpKBLt5KcyQyfJpxLsSgWm7ivvVAZHx4AKh1JkCcH3UtsD8a83pT8t",
  "key24": "4kQhTSVw7iEhLAfCJjVhyLXP2ratjvBmttbuacsWYM6PvQ8NMgPZWpG9xJsgzui8kBj8kX92Q8PEdykg1PFUZ6Lh",
  "key25": "3TfMcEHC6e5aVm1ZP75Mtht6fY7Cz6qViGNm8tKqqo1yQZzdcnW7zEKZb8XhLkHEqd38Pa9x7tews3yjUHotfkLQ",
  "key26": "31PeGVubnyqbtZCc9eGuXnyHyrZv21yxwKHaoNbrp5LtHWVHD7NfK1ZWxxh9dCQL6jdiGXq7kN1C46a5tEwRkwmC",
  "key27": "5WJbGJF4SMrJ3Mi5XDkxHqbguZXL37s7acABdMJWXAznsEnsymYP3KbeHrUFV5FBXNLLJUekMp2yoQosDdNWaT7o",
  "key28": "cxf25rGMDPNqwPHUxDbzojPAPwJZNU8h6sPv8foeAK3v96dFRphDebXuY174dscYHN1wvirwkHwZSseujJ13bKJ",
  "key29": "54uUnt9gtNhy8uibzMBCMg43yx4ZxMJL3RNCwMAj5fwerqybC96RwE2GUMZBibFkPdkQeLNeyG63Y9kXRxwreERN",
  "key30": "2BNdXdcVD2VMSbL6MtChWeHC88K7BrMGu9Wv1EG4RmVF91D3ZeLPYXKCiQC5Dh7acocNvevGaLvRPV3UeeTuUmhJ",
  "key31": "5xTwG25LJQpNo5SgdzTkZknaDLcHpmmyeuevFzjmdKopHjH8tB6qYvfq8bTo59143F7dW8MQpBCFijrY3pTugqHH",
  "key32": "3ipZuEar9wf3F3BKs5iHncCeyxerVf6iFgY54S2BF1Ww8sDgKEtPDHvkXrQUcx46rSMe4pZUQMMBDjhkUAFfiJu1",
  "key33": "ahBQgnd8HxJgu1LBwMZLGGrY8ehtdkd8HA8ku6XsDfE6RzDcXxxi2YNSBepBWE7e3TgLAgxjk8sL9gY5YxeFx71",
  "key34": "4JHyoJK9ET4MFn3MrXvGqSp5sbjhHDFWH6G55kfmSkifo39frVLw2NTErLqLkKFjL1JXxuSFXt33fXgmtmM2LWgo",
  "key35": "5TTZtLaeTzuoab3Kzin4HF2DXUAm3GWriCFGjLk6QyP29xQtuTq8dg344VEzkVikk7PXanHMTMhb4FyyzXfp5SFf",
  "key36": "3f4U596AAed4eFR12U9YiAQ6aDCMYGCf2HX7YsqLZ2ixxQuSLcgnWXgcVJuwnEdqXNQRLEmvAT3PavTACV2aFf73",
  "key37": "28dktydT67nJFznv4DRxdEMfatgaMMuFZTRQ1qnH2nuyuQDJiwEUNNsAGeBE3auqhMmzsrGKBaVweZXe1sn6GVNe",
  "key38": "5DNbQ4mZL1zVxZDoZoZGqC7teJSuMDykHNNyz5qxCfXuzXR7QBtCHGpMCdRMoGSk3c8u8fmR6H4MShrBaT8GTQam",
  "key39": "3aiCepN8UmohCoFq3ypuYHuAidhA37m5i3BQuEEYyU8oUYesPB8LLwrqZwoUxRHk4Jn2SLe7BbSk7S1VYMSQhvzE",
  "key40": "3GwbAcPt6VepTQhBpU4Hamd1H99d1aTvP9oZxLNC4j1R7QwKUUFqA5ciH3S4mpP2Hb8i7U6UQUqYs2HCPe1LG8z6",
  "key41": "2erfE571jsGMFf3hpaJChQhALhj3sCFbWXNdWC4seECarU5HNpSUXx2zpT8aHzDfqQ5fpu94DnqKT2Y5RoybV9WD",
  "key42": "4aMKyPDJpL9akZhRcBVv8BXyUinQi691WLJBwEEfucQH8wjMP17pEjryraJVCAKse4qVEeEr5Xj7dUvLt3ghL9ui",
  "key43": "45eGLnrZNeK58SbpRpm4bnwTdpJwVKR5y1cawsQtzyuu9hppDkZNAqdmdx7jhbk2BvYzPJzoS4SKcgS3Y9WUZega",
  "key44": "2T96mWKGtya2VV7YvNHxs38Gz49YRagSTN4XTACu2Raj4J5zkmwS3bfKMBiUmpMPNj7smBtm7XjZt7cnhuURXG6A",
  "key45": "2p4YQrqYJRx83QDf6EUtQ1P4d2XDykkhSodzQtnp58kLGfXbnwqvziBkFAD3ZY7N3iV4exwLZqoYpVZq3oshxtgV",
  "key46": "4TEyJU62XjtmuyMda8s2BKv8gesDmFVaeiSS6w8vbaXF9ZzLg5YLgwuj7EHsy1ngrSV27fNMtzC1AYLLgP352xmb",
  "key47": "2jRBCvGEdzq4YKnKFh99QJK5B3fSCE8ZGmw5KuJ21ERGSHRHMf81XuNP33X8mYe9AvbzTBbiqcrJ7FB33VwyMWV8",
  "key48": "4mBssvdXUAeLk4B266EgaysnEXWAee679yoPoezRBLQHfYi4ZRoKe5CRez9M1CX6Z2pvH4TxcsRLRDkFES9NsNND"
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
