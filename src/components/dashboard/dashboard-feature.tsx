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
    "22R6baAd46NaXjM772cAVSFLK1ePYM2cp2E2Ypops77w5Hb532JPgGHvh3BkHars4BcBHNubsCiwCtSZeJyqB6Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifaBZMDS1xCzgnZ65xZSmys52zwTs676PHPsqyibE7EjqZoBaUHP6zHjhMa6kTaYkULWnCyGd5fUo6yv6JsNBvB",
  "key1": "JUVFqcXdLW87PGDwGaMDmEBvq6ujvpA1ktryezew9KuudfgbJ1be5siecRkUmoxj2UNXx6GwVVpYVBRrAUrvw9h",
  "key2": "4wQsGNFPeSqakCagri2LL9Pqde42gnVUK7qvudJecEVWiSYZWT3nmt13ZDNMxijhagqXZyfBFVu8BPmVuzcsMMqK",
  "key3": "5EMkTVjbGwHbWPtHc3m1QCMYLm8af3Tp8j1dGet8yethX522AnAZrBRPv1HH3E21scZnWukPUszgp5KEd6ar3pXK",
  "key4": "3qqVfFXsju9ToeNKCjzdjCheUnQTJL9PPm8UDm49fKHsHwcJ5jfkLC9K9w823zUceDbEKNAPhuhUzcUuWXRS5zta",
  "key5": "4FMUyMgskzBHQ6hxh1Rg6VMFMeDJCEhujoZ6pYc6jvkd5CTya68QMFJwtVFSUnZHC7LtJCygrkw6GJL9evuMuwvT",
  "key6": "4PDkMSmS4ZmqxuDTT9jmXt2beRtZKMUo15rNegQ24JNWwgko7SVTuwx51JkbM8BWkQsa9etSNXfv3SwMTnwiPPCR",
  "key7": "MA1qoRVXFfK42htku1RoXEJGRe3yKiVWu6NG3NGb9zaUZDhFruzw3NUsg9BMA7TaQddFm55AaFdKEzg8qXkYEyu",
  "key8": "y1tAnFyQnVbddBwCaM4vxXCjJSXaVmqE436BED1n6HDzYU1KpHX6QSQApSmDjHxN1gCcYTHFGfQLd1jvXEihgtQ",
  "key9": "5EB3QfRa4nkbG7TER4xVeBX5teyAAtGqEdF1eq5Szq21cEdyZWJ9v31eqgs24RDe9gwftxYCBb1H7wveRbioKqZm",
  "key10": "5GuoTM8UuQJVMMxkjYKJvH9uimfR2XpAWbxToue7RVhEXRJiUH5TqTmiLeJ7rfDekUMQbNP3Hq1XfgA6cNPgqugn",
  "key11": "4qTGS5Vu9sUwPr3xANwr2VHAf8TbBnouZ2yykqxhxBJtPdTDmD9HhweSNaZb1A6zU68a4EKdNGtfDE2nF9NUeed9",
  "key12": "3zfoRWHtM9DkUWPcvnaxs4i8eWmaZfnBgrF3ZGMvXj7ynTqVqkSRKTJg62QPu2ZbS6b1ndCgEqufHzg3Rr5XMWz1",
  "key13": "2ex9tsHfvCocdTz7SK7CxgyDCCnTZnZ6v78xZeZWGh1dQRsBfSFMmvaWxw87GSq7nMJAqDhUUgRNsmP7qiPJFr7g",
  "key14": "25bPNpbxzEhZdbSZ6k3ePHd36CLXkqagPPYJEDCZDxmYD3yMJjUNmDvVfX9QBq6C3JL464TJUeGZrrB6EPxAZVDj",
  "key15": "2Mdg6e548NQAvxLnNHuhF4YNdKfP8yENsTjQ3RgFmtStJHFkD69Qj3nWpVpKRKqTdFC5jjMY4r8eaaQzakcKF2jd",
  "key16": "2aTQistuUXbepprS4k4eLFWYVzNpjCZCouDnyHMSPuo8NncKXkeAHoJeXcJMkyydiesUnoaLSmVd3RpgbSSqycxA",
  "key17": "3TCzJ6e6WiB1DL1Ch2KRFvnGT8Vory6mVvdzLTfgUuhyjDhszUoGvpuiKpKTwkyf9NeW4gosEPk2SztBQhZm2uWj",
  "key18": "HmvAeXuAx1L75XS7P4o1QFdxJEF1iv3z9roAEvHT43278icpHhDecizcmhqgknQQpSxjHspbLATht3QasDuWNqw",
  "key19": "2WQwDxdvWwAvQTyQD2XeF9JgzrwPipLb6ZkaH41D5rZ7b2jXaMxA5ubEZNYUbsbMRrrB3QNhMaW8jTRoWz1JkYPF",
  "key20": "3jLL2brygznumJqsud34L7CGRALcxdx59G2PuJt3vVUCRNYid5uDjpo7BMVX1MaB2cjvjsuENXkNB4y9WGuUAtfv",
  "key21": "3ztqLsJVfaWaqJZaKvJsKFmRDasXkWdg9BgQMSAn1HGqLcJPoK6X3TgRue4jyWAKzhur6EZs6yG4uRZGpZWFVnTU",
  "key22": "5cfhvbD2QaJMPon57o5LNz2wF6Uc5TmTN45HMzfpsxVWgndcRzCK6MfpsfnVWZPcy2eAazfgpyzxJUxE4LgYUU8K",
  "key23": "5Nphf7GMASZSJFDo1AgW8neva2wYKzxSP6HFKyEecePZcaPxwQJdUeFJP5YNP8jigbZpQjghB1GunsrbebzzJ7qR",
  "key24": "4F7j9ZKWukae3wC4EoL6A2h9KJrEZNwapBSWeYuAZ8ZCMJgfm8jnvaSKjcE3m9ptTHPMufE1H1kYtYPh1vde6ydH",
  "key25": "32aysLxermLxgfJaom5LcNTcDnnGmoWcdPnLdkXi7ZtnYhw2wfDFpumRUa6gTGNiSYEihUHEFLaQcnW2mvZr4pY2"
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
