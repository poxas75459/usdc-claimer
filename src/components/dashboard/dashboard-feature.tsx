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
    "3weVvp9KDb4kBTE3phDcGtDz9QGKkgKN2Eyyk4UzyQE43EobUQ1EMbgiGJrpdks69nCRG4XUT5KzcGH5mu8C2rgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ANjvfEVXoMMifXTGjb3KkJbk4ECLRk7pwh93BmG841NRGtBipih7mug6yY44RWZCF76nmxb6kgwvLr3bzMzQfv",
  "key1": "42g73o7Ur315YBfHZoVmna81iKQwNgzT9ZeH3Q3JkxGuHYzCqrE4unbJ5R63Wz5ma7VZpaNM82CApDv1jdqojzBW",
  "key2": "8P5f1oXHVVHfvzwEAvoLnzNpY8ZBhHWBYDjj9D4MXDLeg5aZ2cG5NnK5ZybF83umm88weAMbFwtA2VLaFevtLQQ",
  "key3": "3iVyn1HTfbTkPFepBBQd8GQgBeE7EKoSDRDdzBtWyVHfZg35HQWy9KojQ8SS4Cv6dmEb5B5Xzzb9GNXecShY4hLt",
  "key4": "KDfbD15EfzTNG3FrLpjbAEgpCKuFtqfHezWpdHvydeN7L7cqKRM3tXhtLYZRZ42L2ZgvUbooScyGeUCyk8eswHy",
  "key5": "5LgTf6UD9bMSRHBqatdFGRu3NkgZX6r5Z883erEnBjZ1XFh9jbPG2QvimQqfcesWCAnfrUtVopqK7XQuCNBFn1XX",
  "key6": "2diX53gMmdJEMFZqyqF1udWKjafdAufEm2ms9sWFPKYe1tHnmpgvbhe5awziGLb7Qo9UKB7yp7foFs2jNVCNKkKH",
  "key7": "QTbFnScf2vqYAdbBDamtFEb5udrC61UQfPkB7CjT3C6yGLcexNGB5xb7MZkifVH3KNQve59wbNqmaWjDx1GizXg",
  "key8": "w7w4xERn9N2XAwFb9XjyWvVwZuxzeszxxHDHy7zoRj9NqSQ6RziexYNMCif4CAf7qFyatHBYXZTJ1oyetf18PhA",
  "key9": "4iBtWr4ZQevSP52rPD5eJmho7oxR4M5ysKrrAWuFye534ZrefKAwAoNcauzc3Mfk2dj7sg8pMjPs18gaFFZhcTfq",
  "key10": "tifvPcTpgQiTmPhyNukW2wMBZJ9shdCiwmeYdZGR2yGgwdxyLePgYgkV8HYk2Q7aEbs9j3wUoA7mhKkND2FSTZd",
  "key11": "64qnher7jEL67Ffx4pUhSr9QedoQP4FutYrRuH1TDKoX8sj22hJFcfyBAVu4AZFDKsuYpeDm2TvynUhh1uyTrDL5",
  "key12": "5SGAvu7WNAQkhWFSiZt5Sjr9HdUzyz8cVPcKuRei2Hw1kMjvcQQBiVgaU6VNwAzi3EkWvqsXFywQoBsEe2AmrR7Q",
  "key13": "ynPGoUJYjGVCxCStkXTMgmVNrTd45YSBjAAQbG9ZRoUKA2pYdv1tAYPddUTVVgyLaNJCBnt88Rb6WLnSnMW4j67",
  "key14": "3LRAMsywifwf8t9TrwGgKtGP7ZSTgZbGLGPhjdVxjArywtNaCcKxiS57TD5ioZ2Vg6K6izFRiEJLrd59MiQj9gfR",
  "key15": "46FDcDqnKTss4Dkr7as3antiM7DLge5XWkn7eReaKHNvvHkffy6yQCSJApo9wg71tTKZG8JMXsnxPF8fvukaKvru",
  "key16": "3Bf4pGRXK66bV7G8FNzV6NCePxVr78mDVz8GCvQvA4XZWYTHN1iRE3o7cvq9ekqX4JKSEC9Uq4JRYWT9aYk1i2gk",
  "key17": "ejTo1MCPwj5Vs7JJbBSUy6ZCYVuyKBctAk92xjK4T7VTRHpj14b7dmHtmpfedG8jq7ssWHY1pxwg1fiNig2N3Tq",
  "key18": "2arVTwNo8Fb8VcvKS4PNc7Tu2mR4an5wGT6XXJpozbaNC798qRhxKQZUo78NCLeG95cNiaM8t2EBmFfBu2Rvg9eu",
  "key19": "2qCuM1CNsbrS224Cuy7xAEC5roJ2uAz2FTwokqRXB2dcSq1Kp3jUHz9vgxMwCXMryke6HdwGPYm5nMcrQZui7yX8",
  "key20": "21hBW9qkNKFsNUcfG12DPbGCMA76i1HebRtjCQnG5naD9ZSz8AkLMqDXYg2pXCgMGQYVxpx8JQqUHmFoSbGHJSXd",
  "key21": "2d1hyMpC2Dhyim4xLKcNhZotRxhJCsJ2veFz7BecrAzfYkAMbLfiRfSyvJcqr9Z1ZTJnBX34F9uyQLfHpwW4A1GT",
  "key22": "4knzZfNee5UqYFonQv2rLu5ywsPABUVKz7F24PCdDFKQfqKS2enwoaNrLnn5p362ynswL8XGCv9MUcs2y4ecuf9p",
  "key23": "5jfxqjSGapmQ9HYKsYvbGtCoZ8FvvfAy381GcxYv7JLYfgmBFJHv7gwq1KuUfpTmwEMvTxTNmD3VBtkGtQRrnxL9",
  "key24": "Uw3btJG9FSJnP5VzqRWs5HAkPTuse5dJfNq4GXYsjDLWryYtJ8Vd62cnkCiLFaAj9bxje7zdxNkxXAqXnbLgFKp",
  "key25": "3BbKWS45546XqRStv5YmTMF5f3ipbWACmeYt2wy1ZWfGS8yZHk3MPnFTy7qLoAFdz8rPpm95a6Dn8PbBrJLXE7n2",
  "key26": "3GocuPxsGU9PBzACZeSFhJUFWyu2DzBKXDbqrFikAZ7MTXSVbXzfp3s9av1p2u7Gh8D3gUUPTy5k75yTRZFNYsGB",
  "key27": "2oYazszkcAsP1dmsj8iZCMGJ4s4wc7UgdDXfHEa4QijkpmB8M8PDQzHSkPxSdXjK9LFiiiwW3xVXuxMEMXagfJTU",
  "key28": "5757y12DYBLsfytu8w7CneCVy5UCyx7fPYoZ7ETUqXuMNvVKvJfceBaco6aMBdd4YBvXs2iCVVZNXG1iS5U2GiBN",
  "key29": "4o6ghVrRVswKyJrJzfzgNPrzDMo8nfkUCcs3TPs7jAZiL9gcqXHMb9PzjyAf2AFb9tSzFJ6M97iChCx4a84Sdx6z"
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
