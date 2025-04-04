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
    "58UdAD8sjjVbxDT1Pr3tcAGK7Bd1DNMBqxfEAhXUXofMFPfkL3r2wdWHUakfxfcoW9sT9ZbDfnmpWCmoxJbWNXaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45zvNixYvGf6Y4mJbqrmAKTRRzVSLC7rFcf4e7CbVCmRe9iUzQHX56uAqWH5HBprSu3bvDafWNSVc982PA4Rbje",
  "key1": "3XMtmGokfYy9TQqmDwiuET7N84gNFQpWiBuYqqbN4A34HxtH1Xap144wYscjCJt1oUSPDEuTnDYsY4VX7qVfKz3k",
  "key2": "ZRpJVw1xz8DFJXYBGFX4vL67G6THAkaidCEGSNa8BiMqnbhHxFZDsb36nKhK2ffvfDSLZ4Hqj2pkqB22a8odzo1",
  "key3": "2kdm3RLwfZ2aBewNmf2H3yW2Rgq7BbzY41kGb3GnoAExDLjVXT8ouzvbM8HNe2Qg7vAPCKY15hR29HWGLMDwtKYV",
  "key4": "3Ce86GmpHspTPyKjfbbjgkSMxjCvoJ668jAQpexvDBcq8yCc7ALxLbqKsE4PvQoX6Ho2q6J7VxGXVDngrtjJPeRJ",
  "key5": "3U8vcTvq8dEUjk2pnjFbFcQ9ref48CcWQWL7tyjt31SP8XjdTZ5QBm7UEtm5L4ZQ5Ybqd177fh9L1MA34QiUtTSC",
  "key6": "wbg9QZvAXXtCs2XcuYnKSZ43fLMoo3BTRqxKUvWQRfic71cwvsLvJCY8eybqrtMSXKwnG2tWTqCxWA8aWbF8S9F",
  "key7": "3DPXyp7KgyfAgWptTBwbjXxt2znhJKBC5U4LJBUsTFvQoEr9vWvufPycvbgVKcEDNo3eiwUCzdvyGKLqD6N6DTWC",
  "key8": "624qvnPaZZpkutqzLsvUiYE2LvPKu7zK5aSo4fPGCGnp61qjXupKbvjrP11ffrwekTE4eipAHr68p5zM89ynx5v7",
  "key9": "2srNN5DyJJatdhmiqYR8NKT723sM8nnBZ7wyMcMxV9ie1xDoFJwGtjtkHKzPQUr39YwinV4Jy9D5iiri5vb3QwHq",
  "key10": "4KAhcRYU9ZJk2dfo4kxJoA6hHUr4efcfiY1ZqSLc6BDCUYBFLLUYjc9js6XGFStPug4H1p1WoLmbvVns38vz7bSS",
  "key11": "3xVkEvgJUy2FwUMmfVUvNLnTMCdsbC4ga7LtBQkVmtpPQ9BHTi6v5XsHnkmVYW4HFU8tAucGB3uXPnv1rY4pdzg2",
  "key12": "32UDATXMkBmLZ89TuCGyQJJBAvw2WNBZKyfaiaa78DRpegqECEqA837pN8xCPZ5BeCcw9EkgVcFTyJuJua8cvmzm",
  "key13": "ABLj5TzeTJV4tGv96RC6KmD5dStYBemEF1PEAPCL9j7hjFzQuVtMPk1ifZKpRupZR5jsJN4Q5dTycGy6AJS5SPk",
  "key14": "3Re4MtGHZsSKkrdpx7RMYE4x5MoiobdpVsSHNcT6Z3Q1oXmPkwYWuWMxNBcKR6rGxR4hyBAGdJR6apY4FAmv88YL",
  "key15": "3UHe9Qha6Bf2dkVGNz5oXDNjmPP4jQumhNyWTdsM9df6b5R4XWG2hgPNg4ctdNBWu2SgC4PhAgZufKTbVbwPx3v4",
  "key16": "5SGaHrqMK95JRMe4rbJmGYr1fGy6LFTdhnYAgRuDVihKfcRQeM2zraU4nQ1UHdym6y7aV4DPZsqFdFgKH1ebPzQd",
  "key17": "2ScXxoTUwE1gRGuMczWEk4hiweMFthQTxD7rAb3KeyWqBs69xKp3NFcbWXkoErH7sm9rs2MUxPwoKxSiwp4n8Jrv",
  "key18": "5JDvoCwWXd4nFVrWxAMJ8g8H6DY1qjbdu8NRbGSF1bToWjM3cbvpKQbN8wZCwx6Gc3FYfZEhPWX2rp9xqAuGYJVr",
  "key19": "4Yz8brQySCao9JEtG7W75DrWcjpY3UbTGbzdvTGBrQijVTgpqZtHz2FDC8TUoGw4V4pXB5iiB3L9i5Xe5srxeLs2",
  "key20": "3aNzNMz6XhBRK5rG2vVJKXnJ5TvQt3U7WDqFGCK2gE8ugTNoiwK2txzVirg1vcNYHGyA4nD642rTwD7mHLncdhXr",
  "key21": "3DWwV6BgD3EtLjtM1m98vXdQpT2XcvDt6T1YS7vGnR7g2kz5BbRoM7ao3QhUit699cRQJAR2zhxsUX2rhKkqS9kz",
  "key22": "Dbwz8YPoXFrgUxHYiwxEPy1ojfCbmSSRtHP1cfVDpKPgUntPQan4gKVMtebWuPYEeDji3gEtqhBmoFiHsrYge9Q",
  "key23": "28rkQstkyiRE4rJ73DiYtRHpMvC9reahABF1owZvxNBudj2fh16oEya4xNFNvPMPTQfYGE6tgf7LcQR3BxH3XGJ6",
  "key24": "2Eb3J97PzEC4aM7fH5QJ2E26zSpsQWEUtXJmatyneMXmgjzpg71XgGAGyK4FRv7JxbbGcZTfrgXYJG57iVvcZAw2",
  "key25": "4oeaWBDaR8W1bD9Sn4Jv5V1ER9dfUcMeJtHeVAn9JU9UepxHHZfkZJdYm6DihfbgXccwJoAcf1ZqHzuEwWW99ksu",
  "key26": "3WfuFQR7Nz6tDGUJjenq946QKqMW6D6mYETTG8vZN8H3E1jShKbzMJ7YLmXSNsSxuUVt9NTg7qJmnubvAySVnpYi",
  "key27": "5YM4MbJejEywoQrcLkUHirGKis6LJzbiraAd4Qg97t681i5nYTCUD5axHx13uKASeZyybHn6AERJVonegKC6YatS",
  "key28": "5HdmAxscqQjp8MNqMgLuHMhtqpw9bQ5KNmfNBvFJ5vfvCPBP99JbkLjq8ek76gu8e3AHbsnC4nUpQcMP1xhcsEb",
  "key29": "2DZihfhvuSwm5rChPNfphBGqpZp3M1vfjuWrhg6GrCzLYbPEZ9otvmgGnz2KQ4qH91c39e9hK433GECAVhYeL8hD",
  "key30": "5BN46GmAFBsvDR71ufSpeBVg6Ah1riLL5a5DBinbo8sLDNkDLbo4iYuiS3mE7vWJmuk1yga9LST2E3G38DstyKfF",
  "key31": "sZHhhmr9XttGQvcGYZEj3J6kfvGqWMPP8shpRqKdnq13v4SF9VPAFSpja5e8oJgxeTVHPZqB8T68UnnY5rbSdR7",
  "key32": "2BEBAegp2U83HAN9Pdqa4hmXYbYeq7j4SfPbDxbLLSnRsFNy87bXQ8bQsqViq9RzTUuhsc8gzF2JeihEEdVV8YsW",
  "key33": "T7y9mkLXMRpciRmvfreoJ8XG1o3dbzFVEKK3YNvom4Jvz1ruj2wLD5PjGLNJPsb8fwPhAV7Z3HdPu9PkU8CBQck",
  "key34": "5GhqPRSKGqHztmPz6C91R9GoaC8RctxTWTr1q9prjCQ8XRo16N3x6tBda88TpzvExja4MyM45Qy2ntUXtMkTAkpb",
  "key35": "4CPFB3JKEc1KwzfjpCmwPfj2X1fUC6xygUp2b9Wvsnd5EqkSMEiMWXaPn9Fu6gsBLYHQwrBcte1bg2Sf8JQcWdLU"
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
