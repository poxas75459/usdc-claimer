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
    "2P4RxJGSmc13TZgbnDRbwSGfnHMk6S4xjbcgK9rVWEW87rqS2UxH39A81MWak7FvcUnveSFzzqMPL3QdrM7AVUsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yL7HxcKz8oCXLGC8QpgQ96cLw1bq7iC4oTmFzoSttHUGeAk4YWvZQwMnpYAwVj63vmiuVmm62jJW1SnCTFrP9m2",
  "key1": "4srn6pacQCtTtZvBdFmKQFEyWic6KERyrWLm2SLN1eeTHz3rwcwUg6p2SXWQrTE1r95SWddzurPwZhoENeE7tnTA",
  "key2": "5PdDSuw57Ztm7sK7C5eRzjdCDLrgTzpGVGvHxkTi4QMFTLDT7UbfjFbJEKc2mXiiuCDTYiG6FYgb98aWZoN497C9",
  "key3": "4u8Lf6zLDfZ5x4DRVb6SgbQdFyW5ixCGJH6ZsJRR6cM8xHoKfrzbb2RM2emMz7AUBRMgJe3TiYgtNKcne5QJtzN",
  "key4": "XBCJtANA5KpmQtbdA3pPrXV2LxLRANd9tN7zWKoLW2SZfZL7TH4Am4CAGbzhAVGwEnUWBTP5s8uVqaW2qojsfWM",
  "key5": "4roRcZAkz1QpFQAbNT3noG2YgVivtBCspzkSVqS1YWopn1BJqJTbqXDi9KxyYmejgDVzqdGqacDkCyWbaFD4hNod",
  "key6": "4aX3M7E6tpYMkRC2DJzBGGqENSpGdqk9GJePdN4EF2yj8cckJJhgpE1r2Sx2yKkFfypZV5d1PTiTSuabK88UNsQW",
  "key7": "Hr8hCQcFmg28eFd4WJcykaAfLhiox3a3KvUiVofm9NWYwZKApQ1A9eqT9uTbeVg3MhF8zFpjFDdarsvmKw5Yuzm",
  "key8": "3oE5chYhbGaN7ksL3gBnTSwypQFWVnHuUssYaLykWjx21TAKshn3vDETkuiBNUt3cdL4gK2jY2eHafUcV6eyVnPm",
  "key9": "5xymdUqAHydWvNrpXGAEA9LTM4hpBhrtppvkkPN1LDUp8iLhBnSjG6gzmrDyuPcAZ5tHxfiaTWL4tcAgj5ctdNs5",
  "key10": "32bycVfyyHqsXw2qHyEmAFzcvrDc3wz9xBozRPuGJ3QDkJkLjvzrW233ff7WnusHFdPcMbLW7JfhDhKcvhZouLXG",
  "key11": "5wKfiYqCbsEmWiiPCrP6FtNUFmvpfDu2HCBkaQTa9mVVthaBPpc95vHvck8kihDAmbrmCqerZBLoL6JahG8jcFiX",
  "key12": "4vLmxGJQgUS7bU53fut1tZpkBkTw8ep9b3eLkeaPR641T33nPDEM7Ryjgyh2QBggvVvBeJRc5CeowgFXuLnqNKMp",
  "key13": "kY6XcBsvJf36D3vV6TgpwZZGtweq9dUQe6fYAEzTNQ8VJBgmzFz4Hf28NVU5ZaCiJxMXBXTmgnUnWcGcKnNRU6a",
  "key14": "3MESXeCguxDEDrUi2bwFZPb1FCjkM8HyZPHb8e34WPqTh8rVjd6dmaukvwmV61Zjke5z9SrxMzqakjKPHHYjHhaZ",
  "key15": "5sfvVrALvZrsKbDnCem13EiTmNhdAz1NBgxudMhxUnBEzFuyL77CVrmiFevqxBSPPKK3jYe4DiL7FPHMrHUBBCFQ",
  "key16": "3AoWBqx7PeF1xuQSkVe7HLvSisbrdfBn3XjncEDYSSNew4W45XKbryeP71qPGCFLsTsW1NNt4c6o9KCDySGZDgA5",
  "key17": "2ZsCDxrBbQRsktjHbXmH82WKW4KBLCANNm2bzbQQHH2sC5U8k9jQhqStQPm5jYJLCfYzNTHhXGSVrhMbbx9SYYCb",
  "key18": "5HueTqspDaoNJ7GetHmVAnfUw2suBiHWsWpKeACBKbauYCryqjMJpbiGPwoSFe8zpPyr2RN3aCBnKN6f8KhPXK5J",
  "key19": "2V5v2bMfDbXMmJ3YU4VbEXT5zznrA9UixN2zw8yUFVYvGZdyBUV8M47iTm96HhnTiWfUgxbeTkc3MTZsMn2D51dS",
  "key20": "3sci6VfgNvsLx7LXHLcmiqdd9SydiDtU6VtHZaCaXLe1nCBqg6SMtmz8G7PBtvCe6PE26QB9bXTRdbRDtMASkGie",
  "key21": "3rw3iWQAdzYTWpwzbZKmcMJxofrd5M66ncBLViNkmzKfkb66BWwH18TcmYL8q5rktnNahDXhX3LidgkuwWuJKsya",
  "key22": "p7GSCV8Z3ytT3SbHYGGCnSPqMvfzgzXv3zTx3ynUk5dHNzpd6UqDotG2oCrpnRweP2pZmUJJinbaUVFGqWu4zSp",
  "key23": "4uvVg9tqeNRBKm1YiHqBFHwKwbpcKjKB5LvVKurs7Xdf3Yk2SoiS5BSyEkQiaSxGSs3dE9FdL1bvoA5MP98Ex633",
  "key24": "4vQ6ZzeUSYmLBUET4yB3xQipPjWaZaWtXgKpf6TZoz7rkmBym2jM7Nu5mPXPB3dRUTTjGRbWoiaTvDUmSTeP1QEi",
  "key25": "2gbSRMHjrvcm4jSnYzWzrYb5owrxBmr2xeV94S8EDUApt1rSMRzD2EyYMKrYrevvyjFqvwQ9kUfcfrM1cXx2rHKH",
  "key26": "Heqj7q8p73mCvVhtZXyUuzqmgZBTfwKtzKw6nSNrm6RLrjAnJ17v1kbSw1jYGoipxDyb19RBjMtv27reervQVJg",
  "key27": "5VffETPLDiTA7j6ooXhPvvKbGfwaqwptMseqA66eTY1RbTGnAgAxj6PaC4qFHFW4cmMXGv5BqdMF4x1f16YVgH2n"
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
