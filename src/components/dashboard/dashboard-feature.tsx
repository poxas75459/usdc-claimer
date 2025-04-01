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
    "2HLkJWyKNrsLfKzGAMDXuixVFj6q2bxfJxGrtd8Ee9CBenVY9Vg2b3ZDk5GrNecVbggYJGuKJzGWZpZvvDdWavnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfGk1WVMn8ZfMdpJb7pcqASKMi4gaSEmF21J6RHdmJa5dqqwj8vd8N2xTgdgddX2ZqokJiMc31dsNPeNGwtqJkJ",
  "key1": "MSyR4k9v2YekHfytXSToCdnZWZcGj7X8Q27aMeHcx5rM1DDDas3NxBMJVdJXuKfdpxt8XhsA3aFweF4X4Qx7oKX",
  "key2": "3cbzbJU8Y38bJqoNS4DxANq267tyWibK9Dy9fQirezgf3JXBz9Pe1eN6sdpVY9L4rwvf4wV5wMjPSJhNwppn9rQE",
  "key3": "65QYwzzJYzMavsUds2UCd2jMxvkUWnLGkLRn5EBmd3LeeTZfVeBC58txkyVquQSLsCKUQuyKYQADxvg3bXLXENwu",
  "key4": "51uw8JXMBc9fFF8hn4uGsj2pcLLyqyXr11anb52uaGsxCLn1f94TaxJALwmZVoFcuJNWngNpyt4WA1eNPAuQfMVr",
  "key5": "MnDAbCTAyWdAr9Nv75H83WgvG2K2STVw7G3huQMXMXbg4K5N1FiLXdrfv3KVs1kx6uvUkV5rDoX4A6BDbsLzHai",
  "key6": "65awWX25KeSVBUuGWix96t3Q5CUZsDAfWn6JUaaKvVpE84eDZJ1ZmUfWXFs84fRQRWURVjEVj7Ba8nV62aahHKrF",
  "key7": "5oaEQNkpdbaffS3jTjqou64aRKWg597cindonQZpeP57eqbGP5sggWZDXUu4d4nx1haYa1FKV75YCmDaGhdfcDRB",
  "key8": "4gYBJTnKvZSNPcQfcYNWDaffxLKR3zcH1q1gVAuQnb21XjPPQmoKqTekvEHNz1zvRbm9WADqbc9aiJwUBG13Fzzx",
  "key9": "314DZ7U9StfHfjAc9xLzEh45PUPE7DRaS3pufmjAYsvQZCWL21r3LV5ZxwTx3DWJjYAK2ZmxPJs1D4Ktv2zVHHtY",
  "key10": "2EGgmcePssSSwqedJYLavM2kN5Pnc53FUYRfsj5E7bDvP9SraqiDfTQy6PqNf9Gpau3BxGaTVvY3j7pXbjcQmrWf",
  "key11": "2NF7reyYozanv46XM7HaVStP3MGVkMPQrpjDK5advykroBgo2Db4R6F29GXukyAqbtUYCdYywKUKYp5fX5U2whtx",
  "key12": "4ihnzZJjJvjoWhoTqAwJT76Q8Bachzkn1fuqN1oND3PhLguLkMQ3QXCegg9zYmvRkmPHR5hw8ueTBXGjtrBSx88p",
  "key13": "oP98evugqdYfZyCDbgdVXY9tSHRc8pyPREttcX7d9hPKtoTtKPkqNgeHExBYhEiep49iskAqsdSvGxyK4fNh9sj",
  "key14": "4oLW3uhqLLNcNQ4bmz4MrsmahiiR1sxQ7snmzrzYNA5Hmwd48PJbMajUxiTaoKxfvHKS8AJfWAGi8QcVks22pLi3",
  "key15": "2zb5WMxzwLq4yLieH4RtQBnb8t6ikVhJhBqTF2EG3rcr9R57Hj7yB8uJYgaaPQcdcFxaXbz7Uq4tCZnSNAqFLDst",
  "key16": "36r4xPrA8XXgeK9kgP8M15NEswW4S99GFAjsevKRciyGWqy1m2tXCn4P1EpdCHsxeZWZkiV2gDKCs34vagBAysnj",
  "key17": "3EG2PWJ6crZS7fRCtA8ZcD34MnmRh3Eqy1ZHYD7aT3ncfg4qAG9NKWPeU6EJVcMQhwZWGpkpnUyhqFZMMzHU6aY9",
  "key18": "2ToqyVjKgget7ofLFoghJnebRd5RFFwZFwy5Hyskifd7cFHaJwfHLxiZNoJKwrwmkHCRXzzZV4fQ4HJ7gnAbxMSA",
  "key19": "Tt5zJoehveudaNsWDHPdzM99cYUVGroENPP1TRwhT1UbRAMEVxGKKtmnU56rXTRsKX22WDjJsmja3ixuBhnd4mA",
  "key20": "2FinGhS5zxPSYH6d31uPJ5hJVd31qoif7xya48QGjJENHXQ594QiRwBigsEZvzpzt3uAn7K6W5cePSbrT42XKw95",
  "key21": "yN2Ay9wq2nNZQpLoSsTNB3BJaaz5gPtz5Tmq3oKeUXEdx4NpnjjnsqKLXCauS9jz7ppsHQhg938MEc2DNm6H4ty",
  "key22": "ZmuAXpoG8ardvS5hrzyUx6gFCc2egQJgXBtsfEkDiyYXUrAf38NXyyt4dsqiTAatbCWx83UEKkZdteK5wQXbEjk",
  "key23": "47Z4516woKXQeofTM1NNKYEL1jYSmB5esrQFZfR8wQrmj4wP6T2cfy19ix5qnNKCdEQL8HEPPiiHjivPgZW1rVw3",
  "key24": "4CHYByA1cywQxCJLQGkBaKjLXM7nY6pY7d9PkgarGRGNsog1jiii9uigGyeZMYyHTTpujrKsD2eqr5ityJ6f3KpP",
  "key25": "yFjQioX4ivCWkQ1KuV78sKhWM13WSHztN7QKoeLHn6cwbYm2DpBGTogWpMksvecxPCrX3itbuEJR22JSRYB7k8S",
  "key26": "5KMAUxqNNgJyrZGqLLP3QNvdM6Y3McUjy1aqJs4PetcNstdRrjBirzG7t6qGFEXcJABM6BiqvXxfBy6pzYfSAxmf",
  "key27": "2pbGHMH9c545jXmHS6jQsJrikQhYPRAkkUYFnSTs9MJ57acKyT5ErGLbPgiYeEHrtrHV9m7pJMWNyV9eNJiS5pZ2",
  "key28": "54Sir2Y7bCHGcaizYxQFi5L8ThajHpxX5QTStyeikxoQTmzqQvKHbTGUtjUK1NjP46cHDpjJicB9xXizoSZFaDz6"
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
