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
    "2PgYoYFeRDtDwUUhe7eMCScFGwFxozuvmLZhqzdUbJBHLVBVgTi5SdwWPnNh9VTpEm5kBmKe4sg8qt44Zf2eaiX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vfB5U6oUTvFzgqRMJUhGkwkTLz9SF6bRMhG5XohDP8VXCe2ttYp11kVekocxbTqHyaKCNirMy7WpUAdPr4Hto9",
  "key1": "5htNAD2ffE8Y1Wpyu1dq3zEAjRo9ca5sX29aZiq3vpJgbTLppdmQAAERyp4f9w2k1Jh6TEfivLbn2o8httJX3KMo",
  "key2": "3xYPuNjEKKc9NjPr42WfWTLjrsz5eQo9s7EUS2zCCfMdZLVaVKhUv4RkwAfF2feHqum2H3JofZLPxgmTXDw7bZtK",
  "key3": "2DLQwnP253csU12ZTTEbLXWrXaL6wxR41rVd3dzSe4LmNbXhoHEAs86Qi4nMBQ7aEfGrYUdUVmHW9rxNRzuT9zo1",
  "key4": "3n7TVWMhDT8r7nfDCqRRM2pCW51fPkQf9P7FQN3ZssTnH7jtBF6WpmFN8fsiWeAEfisF5FQ9QRjwy8HRbx91xtXL",
  "key5": "4KMbYmSkCYwKkbw4jwMZwocKYwmCoKPB7xVLMdpUE4gDV2PF6Zja3Svj8B7C7yQ1JuauYY4M4GAmZnYFNo5Dy7pS",
  "key6": "2WiKiLXa2RZBmzsGWK6diRafptWW8V712dwvAohUJHgwbxDPi2tzH6Tk2BHNNb12j3PdqXxYPjoU5QdNrPNYPEM1",
  "key7": "3NAXEwc5wWwkZtrTxEGqsf5yg116rJibp1MVxqmaG7P7fkeLi5UkRCuqeJEnY3KxvDDzAbdXqZUXhUm5PRYVd412",
  "key8": "48wPdELgzGpjPaBwAaJAwMiq8YhjwrfF2LHdB4u5H4EnZ4BGP1H3sh1UyGmHxEVMNos3EBh6q5HVt6RLAqwWC91k",
  "key9": "3bW2Z2M8xMHtfnxrwr7iJ2BtrpSf9U2Ntj72sCpApZM6fe6oWYstP9cN5SsRgfX1DHJy34sPPZTYNnmoB4Ye3Ae2",
  "key10": "3vkiKsDAf2Q5H9wKaQFDUKcFUvvk1KhwofYmwnNyWyryweKM4CP1pkFQywotqSD8cnwRi6WfcwV4GYGqGTC87sUF",
  "key11": "3GgANMaeDgyAV9k5VafL2w5V1LbnuFMwRBXH1s7jYyBUktcZeavncSCjrFwZybMBzt2jYs3ecrXuZ3i62rNQAq76",
  "key12": "fhbcAxm5Dn4XdzKoLYvtvELs8px4TmMdPVLwjz7wx2uURktWRhUB9kz3u52GYzTxgnkUQoPmPRDDFapCLBAR7oH",
  "key13": "4xUPiqVkg2kg4prKDJws37mERzgzedshYiSKSQC22GjeYpAQaBvifr9RCQm5WZEmc1kPtAMK2UDrYBR2bBys4sAH",
  "key14": "4SAuiz9d7HCRhzeKHrZES83A3Dw6iekAZ43m4nCB2FZDMrpLJgqjBopuxmbC8u2YXDH95ytyndMsuBAB7ZCanLZa",
  "key15": "4P1ZPSmiM7PRuxKk287vT3JFbrYSuq3PZMk9dPUE3qmBCEQKdnjuQuH52Ph6QdPVctWaYAp6m48QomfA5p8KuFxa",
  "key16": "3wymjUv3qf5XmCanEAtiM9ekmtRX4fU1ZHgtpjD9Dnkukx9un89ReYtkf9EsVjBhdaJR45mjQ2FNLkWWTj8ywDnG",
  "key17": "4AXksGhek58t6uuD6KvET9GikvfJ2bkYYZrras5jQRNtcyKnAmZzfDBJu6PmjBw8CiT6NpJWcjAoBxenkjQCF9w4",
  "key18": "5EN8KqZLwQZvBPjL9LqST7CQvyb3hj3oCqSWopmbYD6gXJ4JmJKqNipJF6SU5U3E9u2rB6bgLUAQAHryb9Ueg6ck",
  "key19": "5cMGo7MD6pkqh4oWfVmaHTCzKWyqKNbuW79CUXTVPZK9x25o7nFdkdFMPC1fQVhQHj359apJvrURGs6Qy4QWgN5o",
  "key20": "56vuaJZBfynztiZmCFPsFpPqnKQpfmy1qJeiHy7FsN41423sPtHjvnDZkwzAx2HZvNYghjUJcyzW1QeikAiGuHQH",
  "key21": "64MdqX2ujLnfv4kkQjAgy186wXr7d1y95Xaghe7fr14zV6e8ZYpAeyPHYeBXCYqdaFcCPAf89LuW3i9r5qSWCipd",
  "key22": "4QiDZeGNNv5xj7FGvL7rb4WG7UYhneAyX8douZuK1KUPtCpwGUXqyGsdQXeKhFiULpNqpCwCo8dgZKBc5CKamhpV",
  "key23": "5WehhddFN4NBr6q1KUKgeA2DNbJfcCAyEP17Ky8HaUDqYHz1eLWWZJmrUp7CL4fdFwuesN9foXBtwnqgeKVvjoN8",
  "key24": "3dn4iai6Vm6g8MRKUKwfHp8dBD1SHT5k9juytpX5eZ2Bv99kERbzK65H4BozHNNmg2baQt6P3k4NBZ38mf66SNwF",
  "key25": "4drmapNbANnfmacBWJGg4LL3K6x1wVWLsDA7J9jUrwXAVTgk2TkZw71w6Ae5m8dZAjVnDZhaT3ynqvEyhozTvLMY",
  "key26": "23Bv1qfjdpVQVkr13KPGUEmHU5TNEZ3YYKcy3gmFcfPGTyCymFEyQuzkT2eQ8CdXhfBpTRwgqRKKY8ScgC7ycBpD",
  "key27": "45PiDi5fNAHELKpzbkH9fto3NQPJi8tRcYYAZeYXWXwvYDapiVZTBzJoPGkaRob4MKsLpdxqaMuyRQkAXKfuis43",
  "key28": "5oHeFSJYo1YzQFn3w2ZbVv2XXX1xzUd7cwQNMww7jAoW3TW1XTfhc4gUwh3tBdSk8BdRetJperaybMvHnLpVJDC",
  "key29": "4nydSgEbPc21J6YoHKBzTA7omtzGC8ayTxAKchzX64x5FAN9ndY5QrvvfEoekxyNHWfnAQALR81Nvs2iGfNhWsiK",
  "key30": "UuR86hdpSNWGa7r94G4gciM9ddwuDwyhtZJhwCkPy4BE2eAmP9csdSKMfQvERerWjBEFMo266XAFyxbRME6eykn",
  "key31": "2UfsdfbSKzy4StASKpTBHhYP9Qig8DGQyeTxfcv9vu8YqbQ3pXwkBQ82PBnVn4941865is9p6MCw6Nz7WvyZ7PK3",
  "key32": "2RX1uVohTEiKRL8USWQZXpjRQDXLCX3ftRwXKh8cegLYWBjRxoufNpoD2uCkd1qmJwZKMEb5ziihHDn5EB1qG8QC",
  "key33": "5X1ReKgaYgE18U6vphxdKVmikP93FxfTt9yLLuDhaLdknJKVeL8bV3UVW5DwT3HAgUPtg5vGxwM6K68QGeVzMppG",
  "key34": "2TSfGZstPFYm3eLJFn9aQQ57Xt5JvXXLJRoMKq3jfPZVrg5VbrfWaFtnceqvadjLBhZv7VgN9jnpZhc3jQNM6PcS",
  "key35": "3oJecFbfvL8xbPAugnvCqZ8Sfu2H3cRdSqVN61usNtPQEVVzKTjjL9VJHeZLtf4E98mzgChkoBccd3z4yoPmMhMi",
  "key36": "5ULC65SGnNL7yT7mVNZgS6YDbgUUhx6qK1y5Ud8YyNorGaPFUMqW9easj9ACGBv7rw1Rs5rp5PD815FH7oUbKU2p",
  "key37": "53vN36fTU2ccUEzfiCP5tAjnGkd6NVjAH22rEM1m48RkPDjhtsC6vhNirW6i2VZReibM2G3ffRPU7TdHaxooYdRV"
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
