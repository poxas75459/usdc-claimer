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
    "2LCFkUrkftYvWqBQXvnwQyvRomuYzGMKMfVkgBT7E2iqLZbf4avKiVmCcemF3vRkbD1ywYboJDwf9ADP1eZovos2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbcxvqNYekTRscP6NMTjhskb74TQzmE1bVaVVCrqrpMa8xQatU1oveSGyThoGLxXsRbZt8V1Uc7CuGsGbskugEt",
  "key1": "i2jXZ1rBNNCU6af9pmMh57NFftMJrk9Bgw4V4QtvFovwJYqrdSpPSJftT7YNefKHqHCzgUpa5fgLtqqqgJUaUcP",
  "key2": "35Q7ogRFy5XANq38fs8R9QSdFXurReH2JdWa9gYJgKi2pGXDTcycApjzN1gtq6fKbNmhtad7EEGsG42LxDhmoNSr",
  "key3": "2KqZTFbY2H36GjBxa8vLetJ2iX8Chm43eC69FRxgm1b37iaxpEyDA1Fp1NFuwLF9MFukTP2mSYK1DwMcKvaKv5xb",
  "key4": "3F1Yi8VhAvZaS8HQHj2XGsVpSvBfkWQdEz8VjGc7pMEPA9bEiiE4hbNhV4bNm8QHPJqzPwvhw4rCoPkYhm41ddWK",
  "key5": "4Kv1U3eN1pETdMf2znHjJbALcnp5KcViMRFFPvGpZDfu1n2Xwu2uNdS41RAPiEENGxtD6856NXTZnzeLiBrWWLnM",
  "key6": "uE8kzKTLbZYQxM7zzgb8DPTd9tq8o3FKa53uc34KzwqTp3akotUS7qTVfMiWy3cA27S4ETZJTo34W2ZW7r5deAn",
  "key7": "4sHdmCHpCqobmebJA1ryX6Ukrnh8km4idTzysbnWEtX7geaWkdrkPsRJNQSoEUE8xDzpy5Fpvb8Jy6BcSD6icWiq",
  "key8": "5ZuaD1qSmidL749hHgCeYgs55N2E1bfoWni2pbv5wxoCFqQbwnKopadu1s5FNkedXs4W4VX2vdbkTNc2ndX3XbbH",
  "key9": "2CnHpy1PRVYoaQbYVtUHeb7tja9nCr22D5g3jkCgcwejSZqzUtkbpkC3uDxXCZeDHGeucFo4tGurc5RkwVpFDpMh",
  "key10": "25KZP8AjxKwHiU37YYCnFyR75TqVzU2yZUD5HRuHQRgWn1QgSqiiJMoYSmqrCEVHSEeSpCFbtX5WoXdY6bmoZ5JN",
  "key11": "2FWAX6NrfEM9BLnd6TKiRxp7TdSKMt4hE8hdfbYmyiHDeFbcGFFXoFSuzebe4YYjSLiuosUjxcK4ScDM4DqVmzq9",
  "key12": "5YdWrU4cQbzfvpHg2We6i8h72xVGwDDqAyTtVaNDjk88RpLCEn2Enao2QnR5euN2DFJnPk8fWXs8rXi2RZ7vzt9m",
  "key13": "cgRSCtFYvujdNbeJbZEp4jTGJHpqstBnzcBayuxkxAzpot8NqbpcraS44qwJ4VmFgUhBbPpgnq4FWYYxW5VUuiQ",
  "key14": "5QRTyV3Uwsg7CVTzfiBkZtVt61LkFViZPyNFo2tkthW67Ci9pwZapA167yQVGd3yTW69TpTyXuTbQ59JaiETsrbF",
  "key15": "ZqeGYCoTvgAgkY8x96zkpMncyKahxvRh9U6hfncGxWvHez9ZkRDUaYBx322KGPvLNCxWxJ55pgehjP8Bu4KUoYL",
  "key16": "mcnHCTTUJ2C2ERMZoXzPxzEArij51THn2W9yzJx9oye2qEyHLmMy9igqR6fW9jGJS5YH8NyREDNt6PwomKLZKBR",
  "key17": "4AqsL3VVLpBmwPLpKxeioytpxkNxHbNGuoY1JMhs7q7CGN1beUruHUKDWbaqtFrcrhACP5wveaWeUat6KFr33tMx",
  "key18": "Ai2DbW5SXoxhVv3vTrzfye1QvBpjdUctaJWqkKkEDLwipzdrmyvqhfei9FDv9vfmRtie2PE7XZe7ywpMSEkcUea",
  "key19": "1MJWi2QhNojLPxDZWewV3Qn6FFfu8Bva5B74U8wW1mYsJXhhvEkGtqNNygNCZitPkwdH1qixmBHUTiQzhodQwFa",
  "key20": "hMNhy3akPZaFrGFPXXetJw7NG5xpM1KLeWe7HiFKozTVENiUHs5GvnTVeZDzeKbJtjf2jTRu4DfBsehBPRZf5Mq",
  "key21": "n1iRxY9scMwg7G3akxvkZynv2eN3p94iXTzgyuRCsTqCR7Tov7GYTMKnuThbgB7bpnuA9dMvNWnNaNoU7hpdfyV",
  "key22": "2V23hpotywSWL7k1xsUHhcdNmjSjiguTgWSj3rZuh8EcPfHj9YiUgqirUR5MZU7y4Ef6YQxhWZut1QqtpZZgbgz2",
  "key23": "2bSpodztonnzuJHBcgS9ixPSGCrCb4qCu83iSp9efJwbftpu8JFZjoW6kwMvosDDd1WCqGRqcYrBQGb4tbQscvs8",
  "key24": "425wTKmb7c2X6w6D7xmNACxD8EoZ5aviFzvVyo6w84bFR3BmEjDqfc4cRBhxq5hpLqu1UthSCRGbmbPQuuzUCB7Q",
  "key25": "2svvRp4niqGYkH3Tq2mv7D2Wnk9i6qm1XwWvHQg2yFiz3VsDGdNN6Tj3NyUbWbgoxiUwBskDQ5aLohnnUzMCqADC",
  "key26": "4K6K4FM79CUjcJijjgkPJctVfJEzKxoigp6zGqA8ZyP95rq4L5pnUQqwKf2x9LhzPjext45mcJXFpBCNyk7yhutQ",
  "key27": "2KigwoB1vFwEe1Nk9tM6fcTv6iiAy2zsY8387e1Z33ArNdP5qTpCKdC4AMUF8ju4BrhrGpbCPKX2AyYdgmZBpjsi",
  "key28": "5jPVPSUYGP43a1NUiP1tK95DYMJDwjVVdjwoejEmwVoFe2yJ75qCypZRbjbGxPDeFbZNqDKiKb86HUGuWhViNYxJ",
  "key29": "2TCuPkecW5tRmnS66fS18vexsPVU1Tx9GpN5pMBYm1p69F6kvLEGGjE6CFP3pjN8hBwigGmQxw5ghawEbjUsFX9p",
  "key30": "4pfieF8eeQU7KUNS7VUbSo4JXJmTu1fe5JDWHYECXUFLWXN5EK2D6qiZcxEN4MHPimLEbiDmnttptFHJzTgjbrJh",
  "key31": "3LmLhQipXLNDFyNEfXdbxmDEV6ADBdUxFnUoxTd24mivA5GfFFBwzpDDEq1twCHdwejhz9VajMehmXet7DSVdZsc",
  "key32": "4XgVnAQkuqHJh7TsdvLRBFJayodngFzExEL6jgLTujM8DsiRYQGhU6vPeHQRt7RJqRfPNm1Nxej4sGtaujrXZsf2",
  "key33": "pQfXRL7u82RV3isjo5xQjnzUA8cf7bQGByK7pj2Ed7h9ivfWoXyG4n2fwNKcpAkucuTYqQvf4hhPv6dPYFoD5Xf",
  "key34": "4smitMhQjLrCTaB3tb2xKGvnMdCMoXnCmJp47dvkEmcDCkvMYY2U29rgtN2tKhqQWFj6M6GgQQVPoW9kDUhocsaA",
  "key35": "2Gt1U7XgN7282AuFKyBKekxP1ckjLPYoD52ibTgfd6HNw9izhqPrkdKQKtrm8bczFcHPZ6hZEBJ5zvpjcsF1c3ey",
  "key36": "3R4kXKA6K7ZnUbxGWx45C2o2MAtzwqybKPHvEU4nrmvWsgQRu1WWdVbfmHEZEKiCAifo3nkNBbKuqJLNkARpifc6",
  "key37": "3M3MaknqsLox8EnJHA5G5m9aLHjgpob89vXjbF4C6mJZY56Qm5qZjo3wHQwBym8MoVMKy4fbemiYmuryZHUTT3nU"
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
