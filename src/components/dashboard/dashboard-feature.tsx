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
    "4AZ7Dj5RRRcncX7nTx9DcN5sYYWN16MC5pooDMee45in7XDzfYT6kFGCBVrgq4friAczQhESv5puymauMqzAGWQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B4DZNdtPbSpmr2upW4Hd7qGjSXtLtesn1kKvgwbiJHdELzi2wv3DPRBX6J7WNFoZZKXQJKns8U9ZSrw4G6UY4Hd",
  "key1": "4nMpJkNrXwjQEgUHeatVPMuYwbZwdDpVcE2rrdmcNpV7MF11wKsag5Z7L3nhAYq9ux7Ki8ycHrQXgZboG9CHJeFR",
  "key2": "2EJHDrYGCFAprCE7KYMz6SGPZdyvV36XWeTga1ry9rVnNMDU8uURHqQRxJrkiW21Gn7JB1eN55LPd6TXS3RJVvpe",
  "key3": "2K6WWZh4Si7EnWkrg4qYJmTNoyAK1v8sgm8bKcenGUy1YBMET93PjLR8HSMT26WdBYyCEHCPL7rFppiA4wYFGZLp",
  "key4": "qpY8MkS9CGhwwKDKA3N8jWpX1j7pUbXAdX9hVdsC9N8hTQVmUJT73NtWntDprNgcMaBWFyBCbhULGcB6Fwn7snY",
  "key5": "L5rKHYf3HRhWvprE7QJAemM6PzB4oSsUPCBBvrJGb44pZAik5oUh2RdUJP5SepNRuoqaJWZgrgYkH11VJycqZt9",
  "key6": "5EsM18aAk5V7XHasQbtad7KmKikn2FC83bA4QYLGqFSzPDvDgst82fEuUBkUW9Nn8zxfJPNqnwKAxuvcGiCxbUZa",
  "key7": "4oyy3DsuK24RwBCBAoHX9iXAnC4umYMJx316cm4PnNCV1uNuok5EurxfE8eNr4TggUpXrrq1MFpuVgBGPVszkzAz",
  "key8": "35ZQsg7MfYaVjagY6NUn1Eka6qcB98P2gGN4pVgki9gZVqmNcYvY81njgvoiH5Z8wRTsJNshWZ3UpGamtNv1psQ9",
  "key9": "5SudTJFxiSKca5Zk18CAUFRhn65jM7g5vZsn1isjXQ1T48k83RmLmWNGbTX2zfPUe3gEA8rgxqVpjM1qKkJUT7pS",
  "key10": "VwfeDhUkwNxDAnzabHXYmjGvpMxLBYSHiNSweTKwWo8wKxQ2E14VhTM6RhzhQu7d8SBZuvxvYRJ4wM2K27onp7L",
  "key11": "4qwbgnfkZBCEJanW5KPiJzVpeKytepHTaDXHLtMVifsyRx23r5dcbdg9gQ6PY2mFshNdCjyj9heRknENg96rwPs6",
  "key12": "3MRckFqNVFjf9LSQJ2Ri1KsbdqyYZrShtwsmeL1BpYidzYPdUE2mUScLsycs5hysuLyqfoRg7cR6HdFYGZhu8VhN",
  "key13": "3iZy7MBo495uZeJZ54NLGrgp4HLMGCPHZ7Hk4Z1V2xbWXfxBqXuDEPkUU7WJquR4wqbYPa4MutScVKk9a9cyeLXW",
  "key14": "2N5xymtx5QKz8d73gbmVbpbELoKUTvpjXE9ZdnLnmjvbF7J2jSjeV49XVrFFYFR1TnmJuXaVFzUdby6kYDHYP5r8",
  "key15": "4pBUgPBQKcm37nLjZ7mbyWBZQxi88u41V1biVqhv4JMdDtejMi8vC7JXbV6WgKLcARaHoWFHrG7uqY5M9tC9AQBc",
  "key16": "3zjT7P6VCyoYdhVjbVXpbocGhaKbRdTKMECifq5EjApJXkrxdhwZH6j61UNS3KwNksE75nBQyuSjAdsk5zzWojLm",
  "key17": "3MNFFpgY3vNcfd5n1YXthVS7xNAe668Zz6vh7bCM5yGuRmeXssgviZXfCVioZmM9iZ5V8TsiYnaZ2aakYb7pJydK",
  "key18": "hsEDnME5PEpk27BL3fYXekyJEgXBiAiZjYri9yhDx8p7ZfYteZepqaFMz25dsUSmFH85zvMz5LnxC7fGH8fPZdQ",
  "key19": "5uxY2X7r3Qx2G5zdvD5mDUv1xTv9Vz6sLjUjXN1Vc5dpeepDomhgsFK7ie9t25JdU89cSNWGvHe1PXtBpkvgRfJA",
  "key20": "4NTq6aJd1vNVnE16mXFf73JRNaaHumB27VDixvpJaiaDEeMGPvLK8hBAPYqD86Qv66f9nBWc56AY3b1ddJqwJKLP",
  "key21": "3hsvQiV5SsfzdUvnne7EESTZbixxPB4veycY6v93uBZuKR7rJSGorJbP5Qprbh5UMVqmzWcx6wKKqBX2CUWSAi1x",
  "key22": "Ljbqh1JUmNSG72cBNLeBDAB1fosrQyqu7fDEfBAJJnmzeLc7AcWZfox8ngTFPbTNrNb1Jo6Rf2egws5hkv9ZYQp",
  "key23": "3nDdXYw2tG8yrE5rdaXfb5EGRz1LPMKJr9eZ4fcgCA6bRM2NvvgqbKJsz7JZrD7y7yccuWp5NxCch6vxwkJiwCjK",
  "key24": "4BbomDLZ48Wn4k34GjLUmWJ2uyudYhLkPthLMgCkuQwFpVMjLX8WSsUqS5PE2F8z2sPVuHKDcsHJmTZ33Tm5H4rX",
  "key25": "2WBFwLmyAWqo6q6th2bEgBim5WAh723UFJqSFtfRcZ9PgRCT1FmDTQ5Sm1prCfLQzKAc91LfF5t7Jqe6pyH721qy",
  "key26": "Hspm5hN1o6ygx7oX1z2GuRdDJ7KhUsrC5c5dzBwqdbZurT7dfWunvkrYwrhPiJnr1tbN3v6DrPjcVJgtp4BCgR3",
  "key27": "57xbeSZ3TNy1pvPT5fimqbGpqib79YR4wiqjstNzZoZ6f7nHWwQPLfGq2rap3qA7dgvsVYsTgxnAf1qz6C1vkeG4",
  "key28": "3P1DHGFz7wdXRt7zADgk2PEJ2fKdDw6Vwc5wco88uUNfsRzPPJBEyiTdGW8emxhfk2ZycxcHGFEAYvSS6eAwfhMR"
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
