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
    "4ho2eHaJft8frduoqeJqeLHYf9sJzEGHPKtGTWSp7Lxcsj1Sck5sVhsVUXhaGuadqHCZ96QLj8QXD8RRrwVwtgqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Npa5rCmxHiZU5VjEBmB5pcMgWyDJ9sSZkmbsDN2ctPivTKLZra7CtJrf4qR6uWkYYxzP5fDiKdde317PRE3Nx4G",
  "key1": "65sj1S5YhsShPE251ULftC58wota9hMMqYefKHjhbMQU3p6vVBe1pGYHpDCo5n6RnGngADBfosj9rZ8kL1SqUfCa",
  "key2": "2dUX1saeoU5nWkYSSdMQLKMznFKahrS96S6CyNnr6fXYpPL9makqznCg6enqRZWbYbhuvRi63GAiHXqneUguXQj8",
  "key3": "5KtMkW8hMNDaroUD9qLytscAQgEoo7wdP4kTtDqCvjddyKyjF9tyg2uu6MXu41WshBmdGb9KfJ4t2fng5kR8wBgU",
  "key4": "55dZ8Wyi7PNdpUHvo3o1wNk2n1smb834HwJPwVgSgtpbwPxW2LySKjkYKgEC5pCkhx1nDHsH9E7b1ET6CM85VVTq",
  "key5": "kPU8kRbLWpvRvm9mTufr9Xtdxaf29NAPhMx4xJTydyDGBT41Ksifo2QEykDxrfVr3yfpDJ37eYQCYX5qJ4UiUNa",
  "key6": "ErTTvtJ9yXFfcMKuoHbtFdcFjp3diAdWqcHWyXH3G6XDfQGb7vXAEGxBuNDQ4U1bAoHfpNkfdftxDLDMiniaTUR",
  "key7": "3XrD8z38Gj64Dam4v6qBSMG2SMB6TjK6QpXQUj3zuPg33jVwfDRn8y2HP3VPHDbh7bNYb7mySJQBdCCC6zne6DD9",
  "key8": "Mw9wLnmUHqfT2JM2uJ8S1yaJFE98bub9gkEG2jtWGkPPPbTj3zhuPKoL7dNwhkuNJBWJ65koHgpmXH3s4zhMepv",
  "key9": "wdCzPc8c368bxZwv5mcyKBmXk2oyBfQ3GZ1wt9wDbdHzzALdw4Xmg1iLTKhtBzcKs3TRhkZF5TTz1TirXfSW5ri",
  "key10": "57fPNHCgHk5is5Fis8GzAMqgsKpa1qAmSwffY4PRJ8rg3e7ZDTNqEdk6SYfinLBTo57CeGc7YoAmas3qYsZHEJyA",
  "key11": "5CicvZW5ghxGv7sJ9mfMbCminwrZAD6aLhVQkX6UfJP9NUq7aBPZiTNHhpHC4pw78TKzgwz4eQ9K379q6iAwK9zD",
  "key12": "29CMN94s9L6zdT9ZJgXruHMtY3xFwKWtGs5FMP8KHifrxSgkERczW4ViSwxKgtzgsdy7VUyoi9hxj8MNZNqoV2TG",
  "key13": "2tv1BBPLooavGL8E6AgscS4in4YSVhPC61UsNv5xbyTnvNgLCVZJTNc5BokhgsZhvFXx1TocKyBXbabpoaCp4bGV",
  "key14": "4uLXPNE7u8gQLPikuTT9AriviNQJHGJK49fgv8mb8BeaCPq5CDiTaNMP5LuRCPsJfXFJx69sE6i3EGmdfYxvSTjm",
  "key15": "jKspYoQS2ZZFNkg4msS9AYcivxPPRH8SnNKb7ZHs3F3McW4V74ZsB4MCbysWMEBTHvLpGpUioBm2CkyxWBN3Vhz",
  "key16": "51q4ud2g5dK1chd1rcrKnhx5AYpJ3SESERsHmKF7Z84FjDi2qTcKXHhWoELnX7czdu1ccr3YdZVQ9G3UH9myY7eD",
  "key17": "5zCUgh8PPMfU8ErA75mdDzQmfPN5bZPreygmkuCnD4Gh4AM4vveDbcYW1aqC6cmNmdFp3Ked4468h1qBP4tGtwxA",
  "key18": "4bVPK8G9TG1xs34VkweueStHLdHwR9Tf87SwhZ33zMPerThjymrCS9h83Qe6pYzdw4aqh6PzY557T5bkzudgKHvm",
  "key19": "3Z2edyXwofL1AcCPpCmKnCf5Se5EZMxmtRzHBmFVWAH9kzfRLnm1S12qESCg68iRtMMkfsj8QN7W3gkmhRpmy1Pz",
  "key20": "2PB4TbXw3wJGUhxQQcVD9GDkTys6zQ1s6GuAagEhQyFkQkkaijmkk47VHrTn9Gafdp3Qx8u5jTVcrDNs9SoepPGL",
  "key21": "3NCixzkwaKKPFWKLjXCjHbGd9DuecWB8WoEWKVhPMWs4TQ4AuGWyz2GxhGsc73GSXZg4AF62rbRdmneEddLisaDY",
  "key22": "5mkk7hegXNgPq6oiZYHJQ6gbqN91xeWEH5hEZKAnz8HMxGrZDaCww19fxMWFYQQkdQEcRLukqNLTyNBaXGo99qBo",
  "key23": "hC7eo1SSiWHYLURFB8xakfNKAS9t32JCjg6S3TNN3xn2Up4qwZZotyYGrFfDtAp4aPGFYZnKSw9hY4raQ92QXYY",
  "key24": "4zvJPastvJc62kad2wGWULB1VNbRWzfY1wS6N2ZLXwAJkd5r2WPsWX5DNHT3tA45LijohpMZ8JZ593HfHXxvGbKh",
  "key25": "4qrxfYqRaXH6QEZqacjjaXBEW7cDptF8vQUDu2K33PLuF51bji9EHiDp4jTG9BP66ux1mANozdNR36oYqwNsd8tL",
  "key26": "2e7m2AyjnnVXm7dj4AWMEHQx6R6eddRHNYRVTTu6XnrKcKE2UJ6tuSVvU9EkbvgG6WDAZCFJT9qdPDYDWX8weS3J",
  "key27": "2vbP1cgBsZf84S22gRT7A98AwETRzzVmo6cpFeJ9wgzdNM3Q23ZeUoBDP8R9K4oi6otCnreX38oYxkzZbH3dcSgK",
  "key28": "Z2yqb7yoCK9YPWWuYrmGP5Yj5wwqfJanQ5jD3ZRxGTMRqT92M7rf8aqBAANUxS3Vz24xJTpUXiKAVYFfLHpMEPK",
  "key29": "2qNTBzcqjL3mdBSnpdaQuBZHpDzZ7tkuACT9rDHhW8Z81qD876YbwiyhGb8CD3wRhssvwnHaSHhGgSbPyFY7t2iW"
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
