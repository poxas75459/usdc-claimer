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
    "4fN56UY5DvH5VMbbN68gNPyFUqgyYYzZMz6Ky9yhWYhK7PiQGtMJviYoPocSL9fVKaJkkhq5d4uuTUcnqTTTz5jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QthxvEMioL9yYxMhj4PQW8KYNgy8Nq142dH2F6rrric8StFCfCmixaKPqXHQnJTEKKVgWksC5kCqFwe4XNshqy1",
  "key1": "5cEEgntUhcS5oicNXSxrWYJEvpq3pVwTMmnYXkDCQwVPMC4P5W7EZ1YUA95iSWEXXKNGAZD5QC3JFb2ueBSinaPL",
  "key2": "Me747PMmatEMqhGbHPKrJ6CVE9jxqeL8YJPvAX34sS1B8w8Wunrrm93rGrCDacjoA11XebVES97Udnp17AEik1X",
  "key3": "qifCwUbDvJk2jtpFD5AA9Wag2hb3ieUGakMfmLkeSi3fqAF3i9dQsDs8z6Evce99QfwqdaENGzkjSktMSKWwRf6",
  "key4": "2MPMG3KahJzKh68mPcUHEpaosKyjLWn8cJY7xA3RDyY9i1ubQVkPLQvyUSEWtsLFyiJ5s2DLYRwgitJFSsZi3Bsu",
  "key5": "3wY2sqH1HTcNVSyVPx7cDLkcrqDfzTKfn3XTfJqRzgVdT7m42PkvJ6wdQdLn6V5fwbWC6CZywTPadihGxvj7cHD4",
  "key6": "ea5v5QBpeiaBFNYaYNoNRJdYTPcLb8GxwCJaaqBucXvvwPfdL4gbJkp7zM1Vx91vvfF8uB14TLfmyoB8UAWn3RM",
  "key7": "4ngWChNJnzmax7ZL1vwZRm5SVuzbk6c5j4XMj4PJfcAfyDWX2eqSAx85wwqnYkg2vQn7LP46dx5uVr8YmqYE4M8V",
  "key8": "3NbZ9eY6T978sJuyFQDLXAcxQh1zAtAY6cj7pDFRUjffkvqwyTfLdKgzpobTW8YcM4KiJ3MMCNpQUDGWMdmpmt7G",
  "key9": "2Bjqu2WXb3fdMEAb2tkdtynqGq9cgo25priLyjzKe47jUKRnYrXBo8gzg4cXi1oG9bsR8vCASoXAnPNc4c1enMZt",
  "key10": "4kwHG5WEgLirw67dE687VqYigogUYwSr1VYWEVbsfVcj6zjUC6BaG5wigKX33baSUCvPAzUPoNnt7kVvtjgExjQ9",
  "key11": "saKf6UPytdoepnGvQnVDJy2aDyCsZ8jSR7AUK7mLYzFg6Vh2ADcULfE1r3LuLoc3tK6tejsQy6oXRpEw3ykR1UN",
  "key12": "sPANAGNXgt5TRpsay37ktYBRKBkh4BdWC6KPYNDWLwvYWkwf24JXnN7c27kRvbdvXUDTZ97yZw6gSu5ZtHRFgYm",
  "key13": "4HDGwUvYNEHKtWK3SjLpTdKosvgwBtdCfPGNQcVNnU2iXCz6eJZ6tHw2L3wJ2H2xHnmSxMdJGxWeppqLtNzmp4jP",
  "key14": "5GqS5iY7rFsYftNFzZLLYZkwrFcCVwHeUMExX9bSYyPoZeBLvmpztp9DuWxmJgHPdmNndJVhHMaxHmA5CH5edRfE",
  "key15": "3GfLniW7niwg4Cf9CCzuU6ymr9D6cT7dStsJvrrfwxaN8rb6V8ntFDFc73BDCMsnhcL4CZnv93YZXVtQbZDjQMFf",
  "key16": "4RRdQ9BewWj7YQdJPvbFFQ4KGubrm257EMVx3fwsXerAgFohForYvtkg6KMesQTSoiKcXtazjo3G6EMF5ETSJZRg",
  "key17": "5Ess8Si2msB9Jj7cMk3udCBJFzsA6rztVzGV7DdmXGjoRwTKirMCofL1ws9khVWDxLPP5n2qJKK45A1Sg5yzSsKA",
  "key18": "3W3JePnH943ufbxkbpG2d2pxLStg27dzr7BtKjHcwT73ms2MYs7zzmjQ2jGRMmcFLoXNb5S56i3JwaLkNBfKB9B6",
  "key19": "41ptvvPzJPbYne7wmem7wiPhTm9nrGy885kFwaVxepbdXYkBiimKKoGBWv4VtGjni9F5bEXe33jAjcCreHHTGx6W",
  "key20": "Ckx6hdHG52goFvXxYm9WkjHoPkwZCc49Lvfv1EjMAJzeiNcmss4GrMV3dzxLhSMPvLPv6P3Cqnj1UANP81NBGdA",
  "key21": "MsgjvjUhnAmsU9Jd2fYNmw8Q6FvXmtXygiXjS4hR8Nhxuihc4UCeCZ9uPVrxV8z1fKUex4jtrKfkDroknVvBYGf",
  "key22": "4pW7KBA2PrYWWtb9KqhxtRrN2yqsKQyieyo8tG4r5qCNuhbY7okr5cU6wey7Qh4oG76pidMb3fodaPndhwNSv34K",
  "key23": "4kdy1GRec5x2peiSJRHrrmiPK6qdW3EXuXUJPDsHPqJKM5wfgda2vFGCJd71dodizGZ7RsY2fvvgHb18D77F69a8",
  "key24": "5EQPp1472s1HaLL3wKtTWAWzm3NKEfNf3mJvBD9FoXLmyW23Dw1bsgAcUazNTW3SZvna3yokfan7CAmYJ28kmBmb",
  "key25": "ZwMFnvpGaoLQbEfS3z1PxPiz3A2BxyYavzT4ccUKQgNFqWYnZo61zSnXveDNK2nhR4gmGsJjDDY699zFh8qSxVo",
  "key26": "3hZtcfx7wY4zixHwT5sbXX1Q5YKX2Pm7uSwPoU2rR3yWUprNEtuoZDSr32y5hUdFZ3mqgJtqnoFDKLFfpkVJ9228",
  "key27": "5iKV8ny5HdXV2gt58iZAnASW63yGuzNoHDkXAVzYgG2cXoyvW43hmA7y3NpMpNePvhAxaJiBLfMPWztEwZUM311P",
  "key28": "P3jiQH6ArWYjMpWREuVokMKhAbdAVhvYWVZ7V3WNjLTmWgEae97CCpJDwFd5ckQsxBCdQXf4HeJnnfp3mNtos7T",
  "key29": "5NqUhkkAFyj1CK5uNx3cHu6UCZhBdHC66ftDasESq7kiUQ1f9cAb2k1XSTnaByJgihNdTJnZaEL7expCjst9XMNv",
  "key30": "5PHA54wC4shLJYNjA44oc4UqPouxhP1aLRDgvTyXvxghZvxJe2w7Po1MyEnPMGMMM6Nx2xhiaft5myzERubesBr2",
  "key31": "4beZbstnEnzNpLZFVTkSAbbQRX65EKhkvXo29o2HPudf1PDghQH8c179BNELvQhvjNn7ZD6LiyHoEskbPtrg2BGp",
  "key32": "5tKVAFZqh9WTb2JQrRqmNYaZNcsbGBZqjyFf9fSgXckZ2AwzbkuHcEiMaHstP95URievwVDgUk6rz5ZZ6nTmsGPH",
  "key33": "3v3MVSSEeRxMHTQ2RmDiYUv9FAbXFZiRZ4HEdKs4MLhex8UyV2Fc5BaBJUf2XWDswBK7xPs3kkhxpStfyNzuZGbP",
  "key34": "hbjzEP7nGeC3nYywTj1W7tc1XPafCF52Jd1m8gtbdxgUo5iysF5zXDwejTQmPoHymYwUGbHNQsQAGsDHB5XRRqe",
  "key35": "4S6K9aZQMLpdk5EVeeZrkYfKMx1pkF4XmEm36dsrVSbfFJXZetoMBQkDurYUSomGwT8QD4FgSv5zQaFrBBV5yZW1",
  "key36": "4wGjqaRnhfvVjpQdQsYaMuRfqc4wp5Pc2tLryVU4MYSSYogMLAiW2ycVka3W4sYXt2HcnnhHaa5DoGiGCWSzJfrA",
  "key37": "3nk2X3QRBbXaiJAdc52kX6ie3fLHQwGCezoFzZ2Bzp9kSqZVgPieB3gtYLh8zu1ivPynERC1XYs848tPWuVrQ7ke",
  "key38": "4iuqAi43Fbnp9STJGivs86f7tKhLzQRkmBjetYrFqcZZaKu9UX2EwxWuCBufLAp84wvfjcwhRmKsHEzy58SNdeb1",
  "key39": "5H14JSvpbDbhYW7jt4coJLArmennKB6iYXCzn4Krm9Jfj2Nz1vLgVWok4EAutqPAkHxzRLEbxsroADZLNF1LEsZs",
  "key40": "3gHEcRgrn7cVZjNVqE9QBeigXQZnXx6rXa7tYKduUynq1LUoCCqENT6w3PVBnfw5VBSh3rXL76e8Y6tbFfvcJ7P7",
  "key41": "2nzAZRVMpK6xzx61TAT8Ce6LJeTP9seYnA5ov8LTLikYpR2Sg1BU4rT35KL575P9UocUze4Ugqr1yK9ZfALq7MDG"
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
