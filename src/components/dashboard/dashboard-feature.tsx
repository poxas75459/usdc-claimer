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
    "5RgT7t2XffvmMFdsQT5ccc6SdQNkxbscY95eHyhH1EomV1hoXGmC8Sfx7pHYWePAVsNzqaSwDodUnmPmFL5Be4ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PpHaipEQFd2DjgoUcaRVfFeqGVYimtixA2D8BQL53r3R2JGaSRmnEbcgPh4HURiHQrJoQiJjPLwipJKCtcnWMoC",
  "key1": "ZywbYxVg6Gng8QnthSHJLacPi9PDHnDNHQpYcSVQbFFMDqe4jwLy3UFFQcYnMsC8K4yFLJEWKkDjWC1MAxFQsme",
  "key2": "f7KUh8kPoB7ouXtuFvfWz8Vu7aLbNSHnTvjRqZo1QxqKqg2pV5sHJEhQ3kvPrVdS9HdhBxZqbT5qUcQf4eR4uPY",
  "key3": "33ev4EAv2UFgemHhwwgjn88UAi7J1mKaoPpci2Kp41EDX5onTZwmavYHgYgCYeC982ZtZSwiFRPHqJRMvEsVqoTU",
  "key4": "4LdJNo2wfD5ZHvPDFeK1D17QEg2n8Jo3hLrQrQQuJfpFpqtRhQn2g5jbdaRH51ReWUhN5ftkBD3WMUruHmbhRbb4",
  "key5": "b9kAuXAmMYVDhSKuU3hrLhZXrAvzY2ahLANavSBrPoHWFVDHc1PV1tDK7BeeEf1SuaMXj623hCd1bTjq8vrdEkd",
  "key6": "2LnRrEu27KrpgUbqCuDcckfcvcYmBPunugMfppqC2umWtWhXt6JHX8gj5JNdk5ZBFCWs3VMB4ysKBVjoWipUkZhR",
  "key7": "2u5AZMNxMBCQSm2LvKngsp5X1ovMEEKiZkzr3oFk6WQm7qvY24myPHH4AYvxMxV4RwLR3UVRsqu68YrM72JYjiNZ",
  "key8": "oZtTXYjcTD9EkR99ctJf6C6KTUP47DoKTDno89JjJpiUSeQmcDaqMjceYQJZjgpGhszHRwAqVoidT5KyfvdE7CH",
  "key9": "54EMoRFie7qnoGY6BgnSSpkBsMh9qCL2UKNA4UxxVHMCS9LycFt3tk4oUo4CqRViduPcR9MZmrVDgMZRALcEdyx7",
  "key10": "2MaqjTEvrvn5EmHiSA1c4SZ1B5dir4pxbK2skKtMH2ZeCX9NayA2fDFF7NBM2VTq5HYX1TXWMzg82RDRzm3LN3FN",
  "key11": "7vJakrCFDmJFkbvqusATie6d2ZRQVPSvAEsau4j8zGQ2Bk5sGJ2qP9Nv3uX6bpDEMy6zA84nFeg69B3yQfG8R1z",
  "key12": "3RtmUVa9QGv5rihF9EGYhMDkTbsSKCgU732djv6dFTqASEtk17rPDBDsoxXJ87gxfCoyaTAXbp7GwwXgJ6zu94Br",
  "key13": "46oqM6qBmMJTg7LK5rSeuEhNdVQDdCnvv4BZZBikwr4tQF99kuEeENU99T2hukB6CJniyKBQrqbo8fMFfGKGWqCH",
  "key14": "3yQL9ZGWQbKA6Evrer9mv5WnDPAY4AYB8rZf7TUGRxTd3o4P8xK81Vk6HE9XGLWzx7deyW89rByfJP9FVbHJRcKF",
  "key15": "4Cp2xCs7FvL99PbJQoTHUuvBq7A17NBnkmhME2P2Q1wstYqvqU128JzzdfVacSSVABBHnBtGQn56k8yPR8Cwx5UZ",
  "key16": "4jN5ko3zgBBwrF8xL4y1acaCUei3TTxwJrAnV8NwV9qu2zeTHnBqeNKuqrzzYB5C2u8jDmUMPDjPKfs58SK2o6Sq",
  "key17": "3gvxgs9crkdXB7L3zJYvGT5zAUGKtQVPXyG3mfrVqsPFdYJA5F9PneJMr9NqTWnCREjQGtQMHW5PS4uCfx6T8cwY",
  "key18": "4Cbi5zM922Qya5SaSuii7HiWQswqUWQPAKMfj3RN7eggUi7zUiggywudWAaAztnJfR8a2tYhxBWdn1Rf2RV21eeY",
  "key19": "5iE1oHXyqBx8wMto5hSiKdNZekueVGdtHHDEUVfAJ2Zx6trssNY6wb2XmLZqhQoYdnLcmkMrKsydceDZBVELaE4z",
  "key20": "3zaRc5qrvYZDrFm21jbuJbfdVxh5HEQMdUcho6FVX6mw5ipJQ37gfhLnThZsDHEuMS9UcVFP2TxA8ZkCGepfiz56",
  "key21": "MZg4n49HG6JkxaqJPsxuduFEGJkHn8B5hefqPn7PYDZ1gyEoi36opQHxC3cCcKproL4GLZMjh2iNzGkoyhkizWt",
  "key22": "45HPLamwj6v1X1bZfm1ypXnRpE223gkPvZXkiFJQAZfpa7gTedfBNoosTBKAZCUK7jB98eXqB42ract5pNTzwZGi",
  "key23": "t9tp1dhwyZxMNtbPNxgdj1ayx3SmC7gubA4iQcaCqbmZegRMfZEccDC8MmwZmqUpEEJDYejmZGaKRP5pWsDeXSV",
  "key24": "tnVLxdVfPixBamAj6RUzYBPBxTcX8V96Wf9NdcQe4zrws4PjeBAxxNG62SwveoxeTQLUC1dMnKSjaPE56GUHX58",
  "key25": "213pioTfioBg9pfAGZ4dXtgq7cG266LmpGD6b4WjSVjBskvVM5jMEn7JYekbzbPXVu3TGghQReAJa2jStpBrRGBx",
  "key26": "3RAeMxYdbtea8pU7NoXLjquNQ3dvu5EKM9hGeJqrySSPqPGQGXoVwcmNvhTkPNqJmtxMUZ52pmiwiRVdY2389uYX",
  "key27": "2GqTY2DgRsjRnHvaHurzX84HSdCHLTUbQPBPqMaJP4oHFzD4tkNza6EjwcpZAk6LPVhYVb8Sf3PS9CvszGC4C9dS",
  "key28": "2Hp6hvgZuddye9VyYedczgnJnH18ajm7ocfGeS6vitPekTD2oohZQh6xBtBechXv5YyHVPPTL7Q9dy5GbJstZ6FY",
  "key29": "3rVMHLeQhNgYq69qsGeJKYQPWVd7vWJM2VDWshEzF2ggzxkA3KGefzGE759tNUJVXuCTbvcrTDvPNWWVAgsUanvz",
  "key30": "3pWXkAHgeMo2rDsLrPt5vq2DgzK6f478gqFh3B13q7RfvhquFjzWJWY7AgWyrk9mEfQyFNt7dPB9VMChLeiq1iKV",
  "key31": "3LqcTvJwwnCUmBpcYx7y8j8aUrJxaqVnbCBnnuGkJArxdJTdDXcyZa4UZ5dzb4XU5y79rPGj6WjG9dhxnrDH5PSQ",
  "key32": "43wAdcfd5B2ZAVfd64ndrH5KKuEBdJdnGePz9mXzfmmyY53Acqu7b2WT58RxTebBKMbBMWGhxai6xd93t8ehxnX4",
  "key33": "5M1QPjLaSt4FFXP5NPgPKVxxWBGEcTHekNbhAWLym4KJGvdVMyfeE7h6r5QMkuKNkDtkYUTFZyyLJ8pAwvkKaRgn",
  "key34": "4YXiwgfN2bzoQMSRALiVANJrHD5MsR4HQfybVbwzo9qNjXt92P4XPfQYb4hfajG6hrqk4ivDrYwisqZ4fKVBqwmn",
  "key35": "4yJ5BaSNkmL1srPcCggLPyYnybqXmRQyqHVNffucwox7V4MopJ4c5Ec4Fb3kpXKW8yptguTCujkSW87LFDE9uDwF",
  "key36": "35KtcVKeuHFYMXyWLe6Ca3UUd8SMr9jSzpYtW6LM8BNnGQYNhhWcrhxXPQPNuBBaphNWnZ3TrdbsA34scSE7g2A6",
  "key37": "2SypesknJjwqjzHkZGL2yK3BSy4Cmqh2pBAGFKEXHo13Qhtz9ixHe49zVFynES29zUuFQPkNgQtLAn8qLT2mZcxp"
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
