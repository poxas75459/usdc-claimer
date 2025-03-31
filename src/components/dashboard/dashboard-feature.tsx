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
    "1aZM4zm4APkUrWr3nLAM3jnwfGm4QYZnpHgyNQBq6DhiayR1ydEnCzAx9oYP23MBT4SdMKoWLXTs36r3ebLsPcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aoMbn3z87CwQjd6cyyJGrK18ysiXcks89h5x11hrZcXb38R2dYPbyQDZporUDSiNyuCek7Ffzj4JN9cio18h1P",
  "key1": "63G6cawjaMDam2cZjmyKHats8biPDLPY4zrgNSJujryJ9QwYVtWLk785PP2phH7UZoRrtpu9kS3ddRv3jHKBg6uJ",
  "key2": "aALoEs8kr5AVkVq2iy6NbUbYBFWpQGqQ35f41FLEQ9doUKSNs8nX1UTjriJxeRBa8mgxUTKspakEaW7Yk4WhVzu",
  "key3": "31oiBiG9BGYpyf4pRqW5ujjBSVcfGM5mLorkfMgLP2tTEoUajqhoLeDUrL1RSMuyGxQ1e8TS72E2urZ76hGRzwVY",
  "key4": "2KmJA4GhBRP9gC1rcRG69bV3aZtZTRsgyVpBfidDs9uXiyWspsHoFGdHRptLkPojCC2GdfGUdgSTP2T27RmJB6ju",
  "key5": "55PyjmiEJrD7wvRcBdR1KoRKMn4afRQrBvWsky3GynJJ3JutVSsCkgMJcZjeooUFetkhQdeCExMNh8eycKAuMGGi",
  "key6": "3pUpG8tBfyWfGfjHxWemDMkybCqcY5sDoJ3ijvawD83RZQZ5vX2mVe1NS71kSKibGTtmhzK13XZEPa1r5oFVvKrA",
  "key7": "2S7Sg6mwTWzrqLug8PaRnKkC1N686WoM8yDMaSm2ukbCQytmXcBBPtihbBSWwZTNhzFxsLLUT7Lrw81FYDuHSJuo",
  "key8": "2p3GHDVmt7ABet7U5SgdyFfaZ3sB8vrj1VVGabE97fQGQNXeQW9d1bw7JagPfpbVQereuaZPZ1LxrZk4vEKER3vr",
  "key9": "3JrfU6VhfQYtXiWvpzPPUZPnni1pLUeQWopf9i4LTT2WnvSeACmoAfxLZGgJNCdDtyaPYu12hZdW4tQ7cXTH8ghn",
  "key10": "5K3vNVnRqPF53ntJ3QRz5kRcXRBf8qUuaUF5VQdiiSmRt3ANpqaRzLCvDeucdRdeqDe74is6gryRpSjLqpMPCJ7A",
  "key11": "3GSfZikqJRkBd3bkb89UWbnVGNFkBg7ncfDXSPNpZZoz83Q8iZfzn55BRCyEWXdDrk523Ce6VSdP83fgpF8dBeWj",
  "key12": "djnqDPxXSz7TSsAFKpnQFgNqD4JwepS6PX7YTb1YvG9G4EPLBFWxR9Jg8A5yfCfn8f4fJEnf7XAwNAkCWEonukX",
  "key13": "jyoQdHLn9qU13v4CyjHoHiugwEeznQvCSHakGgMiSvFPnunAdweMeR4wY8CsM9Dap7Ec2ipN4SNvSEfSenbSvMZ",
  "key14": "Z1bKBbtQRL4yRDhJguhubzK3rK2h1ykidvWVnaumG7Q2K8NhVbzK1d5TstqhimEJmoscqSMLV4EnKHeyJkPwvG5",
  "key15": "3GkkQ1TvzcnpsMzWdjd4bnbsq77JEppQ9CHpnG54173WEXzjqXCXsFeXBz9GFGX1ZhmQfQmvo7ePhopJztLWz3CC",
  "key16": "ZjFrUZhBqL39NWGiakP4dH4p5KgcUiSFwDBTHRuxNPoyuy65a5FBo2wD4W3ZFCdYGYtXanyjR7PzTUCKjUPihjC",
  "key17": "d8XQAUMMfh3UjTQSWFyLt8qbrkMfynddhM9GxzMCopgnqj2gYPa9Kwn1MEZrt1LcnZtuN6MLY1R3uaPgDNfiWUi",
  "key18": "3z9i4nAXiHAuNYBUBjmiFBNZKGSMhK9xvk9B2SwC6uk1obPi2RpDVqqxvWYPRnk9gz1SPw53pCVEasSKSWte8RQu",
  "key19": "3ypENouFgLpRWkX66VDD6xWpFvxuNvVcBV37LcCPZscBVWZkARH8zE9vjQG2ATtzEt5qkiCmiJ8qcgwRJNmPaAzd",
  "key20": "JVFTAxfahjpVAW6zEHXLEtujUUFEgiTFoYZn4T3FLoEqzaxvnY8xJUcDTT5drpJ2JMBY3sUsFseqFJRRMmG2pg5",
  "key21": "3z6Yd5S1qbGZNf4tPeXrfLhf3UunA4iSSXY9wPzFjoFXZ89RPDnPZQHEKEgmxHeBKMjy7i86Az1FpWdrg7SGZW3k",
  "key22": "uyfE4UCHZdRsbb1iNCx1YexpFXD7rxSYpFGqmLhr494wmfmb74a67CqFyzcJcrZm3ScC8PYYhfoxdg8tgrhYdHn",
  "key23": "48GNfvrHSDCU4XbUaovH2Uz53pSzrspiJDgn7Qc22DxBxwt1veNXHYz9kAnRhoXaBHtgzEUrR7ok33AadYjZyYio",
  "key24": "em8srH6CU4wFS5sLXhv4YBXz2W2kyy39oWjAAGuLgMLGgHhAs6ANKaTz9x6infz7frpAfncLXQqSddhB3ZD6jKG",
  "key25": "4ypYe8mcvEC7KmtryHT3nWkuTPKWzvg4wUhY9NMBc42bQYYatcEzTAHqmVeSqQCntwTKxSbUnkpViKvWgt4vnFt6",
  "key26": "59dCFBGwEpRZRxkrkXrsqpypJQEWzHvsGZncGs5JHpnJXauPs223gh557mz5j9VdHC5aQJYua42gtkgu5PjaiwDw",
  "key27": "5Piv1jF5Uav62pjMwaWCNX4HGM24XMTmTajfEBPF7mdA13yi8wXqb6jByotrNkePYfLQZMPREBji3h6aYgRJMTZV",
  "key28": "P65tRMh8dnWXsgFtQXfFYEebsuCdvwnLW6bXY2pqvhRwmVt9bHCtgTaCt3yi65Mj5o3uDPkm4NbUBuqTRbniuYD",
  "key29": "Y6o9XD51uYG9otGLUBAgygtSScH44bkdzc7HKMhuTqmWBVBE35fFUngSy1EUYAsbbayeY27yi5hTAEFv3yaRiji",
  "key30": "UVddsEeUVotxYXBFkPckcRsCR6UuDgka5BTvWgGZQ5N1qWcJkytqExmWndMgdeT1Q8zuFmUHaEprGW3UDyWpmv6",
  "key31": "B8UNH8dpss4KC4qBKU7puBMWw2ypHj2kxLLxhEGptyCNGgooXTosvZVXSVWtfb3ZHV9mNfVzA8DR9vfWW2WZBXW",
  "key32": "53aTeCXCw1BfhKi33Kgm27TsCynFHAY8YHsQ36GKE7j9dW2b639gXtaWWAjx1DPjQ8uu7KY3febYvCAycZFpXViU"
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
