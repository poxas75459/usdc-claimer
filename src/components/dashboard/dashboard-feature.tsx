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
    "3WBrQmcSQ1ttHBdeqLJh2v2jSPE4Q4wKjroJgZonvEV7csXZ1pbRCdHQc9HdTMmT5Q15u9F6vHKbdC9zFKMGuWj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMp2UiridQeLEYPBo3BPM5coUjWJ2GJEKKP5p7yj2VNDu5of3Rs6Lfh9QTDAvbPt8zkUAtzD8LfWddzw33Aq57r",
  "key1": "4hSmEcZTfJRMsVZkLbRgFbXHbqjBQq6geuBBox4Crk9vwCwpVTJb69z7THQCHzSTy7aQ8GsMvAijZJyfGchb7JxJ",
  "key2": "7ssURuksC2RFaRmkRJ8mTUYSU5HQxdY2a5R46HAD1iquJCQrk7GemiJYbvFgQEtWwyUq7Ltszf7CCzLvP9XMTgL",
  "key3": "3ipTc3hn9iFq6HVrReVSCGEvmVm3Q922XS4McgNiPRdtcDuyAWvULr1Kid7JJk8Ntafv6CuWQoPttojysC2advX2",
  "key4": "2fsUkMLBobjhzQxbSvNfm7nbFfR3PDKZ9tW2NqE25UodZJinpY4b1JGBSpWbfpgQ7CLNV9jVJKCqz3L5njJTNZ73",
  "key5": "3vRzhJLXougdToFTxoiNmmKyJnrcV1KGau9BNQAHoGZaEEza5FZeFgxrP4qSuzQbtkMitMpjdJm6jY2MbxJSnhga",
  "key6": "3pXCHNsPLfAqUpDSyR8ZKecw7FhSxNNMzXiDf6UW8B8pSGRKGwaU9kgHZZeRgnKpF1VFk5MCexCqA65X29awQSgE",
  "key7": "5jYFQw7K7dhVocc4uHKriRh9F9EH5hs5KJSDDUukEBNp5ydc2p84FrycbBhyxy1eUhKxuUKQDVQwjCAwmrGAPCLp",
  "key8": "5Wx28BHfEb47hKGpgw85wpFNTsDCzmY56gzxYPkVvRxQuW2fSkVihGc2FweoNtYBtZGSwSJv6AnQgngZNQXM6RiQ",
  "key9": "2sQPaPQrYDUvfb325CjCbW54ZK7sPpj7xc3bVSvQQVHbseKjoFQQUpvTgN61qSRKeTqPfXgAeg1JvBCNv51uMG2Q",
  "key10": "2xshx8DBngUjdvmDaPTWjaZAkWPsiZ2cL6py9qWMdjuVy7gyVq3KLoeEq89QQrmJRSVJEDt7TPJYY5u2toG2fMEe",
  "key11": "3EoGKWKey5aMTHn5YdDe5z6Zo9Z7K9BFtLN6JzcJ5YcVDdr6PVvTcmvjApRHYQRoPQcASU3EGFo7UJZFhUzyDTZn",
  "key12": "4SQ4H7kMDnvQXmdMMiimAFHZXJ2WgE8ui6k4NZxHzfmx191jjnSu4FwCHm1efYhU8JmnqkY48Bz8vubRhXDvCa2L",
  "key13": "kudMscvxZbjJk9Nq2x51LVGtM8q1C7JbnJNpHxRptX3UghFZuxFP5wEHdNEP4kpPX9xDA8KAV5EB2r97mvGVBEk",
  "key14": "2ssn1pzREbw65LpFgnuy9NGM2ey89vGvMZZ12MNBPG8oEQZPXth4PUCrSTpzehiYdscc626TW5MrUh4VduYiUcm4",
  "key15": "W6gYePH2X8T5QRMEDMjzKhPm7Ex3212L2DkSPay1oEgMJMy73WQn8k9nGmWSivzFGTKmAWonNkWAX64FBrL3Pdt",
  "key16": "2GB4GUK6EfgXYxtjNHsMnrx94rN9er3J8tA2P5ePxmjbpkL1WieE2XMKwLQWJWdJCFdKzSrgH11PRg8RLqoSr1BD",
  "key17": "3Nh61dEg2RNetGZJrLkwhoysMrhoT8Q2MPYRTzszDEZNfay55nFi17KufFwTFrgyCtuHSmySv2ZUcV7Fgh7NfgTq",
  "key18": "3JwW43WjsU2HNzGUnpHoT19ZVdB8kinvfLr6YymuKpSs248VXV3pJmZgTfWG8bjZyjshMK82i4aro9C6dZmkmWt9",
  "key19": "2i2qAoWmgYzmZFhif4W6mpuxKLfmcmzuMFbmsrdVEinPKz7g8Pi8PamQ32cPZEY87Q2Qxnhc2HXcXZGwKrAkVXz3",
  "key20": "uThy3czBRXYU16rpxmW1WXUWnt4qXt555ungVCRiQ9sfJ6C5Dujhe4QvmEPe3o7kDF3pppbcy8cBJYLo8QykgaF",
  "key21": "4ccMdEiAkBCKU9Q357QrSR6F2QNp7ZWMEMGqehgvsABoPB3jr664mKjQwiMpAdyd5Dta5D6zXrmQTQJrQXke8Jxd",
  "key22": "45NjzSdjfSQLxKAW8Quznhurs9zAtQnVveU5b5qNxDkuLkwT95f2nXkNr62VaZKgarxTbzYF5d8NHRJ6yA8pNXqg",
  "key23": "2iaGbXdfaihz7bEkV1qEhMmKqoMdCkWDsTQkzGaK5zb37Nxvk6MwkYpS9c9iMC4gYfqzrXJFSEReRok91tPgnyTE",
  "key24": "2AiyDuvqSt7iiYTtVaThQ5cjQU6U4akDPQuLdcmLcwTcLRhYqGbWgDqs29yFa3u6vu9c9xSpEpnA3JNMGQxT1dez",
  "key25": "2satDz4rRzxTyLW5pyPgV6hWoewsLkiFffeH2G1Cdm42oXDxKmj9b8QQhXGgt96JZvt36X3L8xHbpwcCVQPrQn2D",
  "key26": "hDmVZUgfcFEm7ugGsPdFdcmStSoJYCC21Wkizamh7B3msQ2aCFKmpjMeM5b9d6m54XxHDEcd4aJwiBizyvTuKZh",
  "key27": "2uhiR3f1vUNhF7fwEYnubGrjpJb2Ea3MmVa7k8faVfVNCmWhxtdAYjeGMB3NTYSDh6D2vXHjyfdCk1f79aNHP6xQ",
  "key28": "2x1FbEvXKQwBUzmVhMrLxTtq2XSmjcorfEhGgfpYmdPzhTArKMSejphSSZfAgmhvkBzmEQotD3rtzVbHya7m5tub",
  "key29": "2AbzSCbWM11tXXcugrmNsVcNY2H3mL2fChSRo7qkmyd3Ucm4AMfPH5Pgdb1GrFKkxiAZY3yoVTeR3K36mMsyMVQn",
  "key30": "jzqkMtGtt4hppvPHiD5Hg7EGCH4t9Tu3NQoB3WshZSuWhzDEh1CqZ54egcxQn3iZqrxKVFh6FwEfy3wwt9C2kWZ",
  "key31": "55ZN9pYyb7zgjXe9EpbCt6xtxLGcntf3KAk84qsV2hXVFpMzSBQuacDFwTPFfNXtGRjKiHLwV1FCFcgzC1P8DCmG",
  "key32": "4YGFyGkc3awL8sukRMuM1capSp1mt81nEtbTi2VrJR6gFZFFjpM8rL26RaXmnnQvRjpwSfn3fDuxBGRSPBqX41Mt",
  "key33": "2c7TJoGZexHyXpGbCu7e3xHqVUJasyCAqTEQkSENpumT4RJNHS9ii9N357r9bZ94czsqvSxLBzbSeQH64Jujgqsg",
  "key34": "2rgawdHMGZw1eq7PeGy2RNiXBnqRfmehoK1g8UJkzJPftTiG9eZHNNAHCWEUtPfcFz4Zjx1aY4td2Jc2h76fNrHX",
  "key35": "2gVD5XMb4M1ZpdiWPeUvmi7yNWcuLbuc23DuTJr7CYZ9ymTejwPzU5STzRwuH5M9h6SGey4ee57AtyPuBfSsKJ79",
  "key36": "5pUTu6DJ1EN4pzUfbyfLzDcQ6wX2vPUUumqaajqQb2sPVxmpt4sGE1ywYJcmD6bb8rpepmr2DVc9VANJSvPqfufN",
  "key37": "4pZZkuxeFLVDhCLbnNZBKgA1ZmLirpnhfXsZsskiKnTR6LK2R9N4KUv49cCzoiz4qTKC1ZdYYh6SoVU3fCQHujNr",
  "key38": "4N1d9dBrqR4vLDxvLotzoBFr1NsM8X5dPua62ecVKrwRv4qcTAUEniuLXR2MdxsQZG2tagW4JDnxwEXSrWxwcSVd",
  "key39": "5vAMMEm2DZVHNzKfQXH5NvfgtbTBjTmgT1n6FwW9bbEpTHPrvCEF4X1A7Y7vnFS2xrB7Gx6CavVB97wUFTKJVqAC",
  "key40": "22hHSFmvBzY43hYro5ZxxnFVGWvfThMNDK8BidvtRiKWzkSUXtq7V5BPVp3r1HnxHXAymHhXppTAE6VeRJ2mdNT5",
  "key41": "Z95fTenWch3PRSDFyu8GDvYkBYygwdHPcJfQjZEFtQQcF5EyXfEGa8otKopYgbqwBt6GbGFLAZLgrT18fi9g8HB",
  "key42": "4Cs15doktPp3msL8hZPN3TfQ2yDvm3YGuaMqhTt3EhAm3zxf4zvaHroKbGeNYzdeQBxLSYT3QLz62wcsmc82xNML",
  "key43": "4KS9Y9eTBMitgL1u7EJcqkGFfJqiiv6DDjQk4LCvfXJVTgcxmaY2G2WsQmKLcJDF4cHSWtaMXfufc3HnRQNtYQjC",
  "key44": "28WaJrjEjGgbAes1MGDvDG54LEvxbuvn19EPD5bZ76LvCPbph3uDwUPCVNoKvz4Rujc8oQxPzfBKW9DuWX4gbmbq",
  "key45": "2N9X2yqYcsQAfF6yomYM7uxpv65BGDzCYG78Zkjwv7ttiN2WHPVmuyrqfVE5A4GPCn4CV8hgq7gmA7aJfLb98q68"
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
