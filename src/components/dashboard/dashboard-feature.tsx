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
    "G3dLaXUfkQr1bZAAE7NQjDiYNTb73U4V2SgYeNxzGoT3Kj5WNVDKKGTNVh3FfHzzabLXX4Hy6gMuKZY5GqF3iKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ddqcFbnnzzRLrR2afCmq32443gZvbaqki953PwvQ44spVK6zrMhRcAenAjeR3zUXQAdgJxfsFX5L4nRMr5wTDXA",
  "key1": "5JEBCwKSbay5Xn7NX4y1FvNhYP86RhdmacfCWoqPLA1JScgUResXUutdcycmz8EwxtadsJj45KKe6opLvUNJLCpf",
  "key2": "59TXbyb2xGvATV8paEjxyvnCgNXH9mAvXdGjj2FpDLGSgZtDHejXb9H1EJxWco4bgfNaNDRhiZbXsKJgg3WZyL7d",
  "key3": "thsiXa59c419dRdvmamMUDgtzrSbkZGCXjf8FVVCbDz9ghiS5tbjE3RZvVdDeLLj1d9TE7uVLimnDjKBJ5X4nZM",
  "key4": "3WHr26XETTcqoWztgjLi8uneFFRRh84YQezPTeueLQAJgych6HBgX6wHAkA7QMVjbtN77yB68vMK14tMrxn1955B",
  "key5": "4xk8qAqe3FCmdcmLspV84HeWdp4ozFxbMpMn1VXAxc621j4Y94pf99oh7o1X2Dq4mcsruK2RDk7jzDfhydbMTnFA",
  "key6": "41L2FZ2jJPZboroMBBRdoyaZZYbYv3YznUszoWAxnD1MeTcmx1LPMLdp8jki8gnr5gQtNJqCiMLov6xJ42Dwsg6a",
  "key7": "h6RNsabgxrSWRQikLmKPYvTF55bBjfJwRghk6VbVNC4fDm244t8y1uqk3EMbShQEbgwde2p1uYsav111wtp85C2",
  "key8": "4GZgWDUW3zXunoZ3ukuXKYS5gip9pGC1cEH17sTj5j8aKRu5JTrGS7QCSB81toYXeATpGWEnKe3J2XLdSUUPPdZ2",
  "key9": "4acyfBqCq91PsjoA7a987uMCAxsDffEZqzx9L8aa9qPpfgHdyrynyu95KPNxkEiQfQ3cgDxN8XDquBMqSWbgXJZ8",
  "key10": "SyetJ8KP49yt1WmsAKEPAgxZGwwjN34zesysJ9yzNpZuT8W4VZChd8bvs4cnXDp3LLdgZ7DTecRoh5rukAGzVJm",
  "key11": "4xLFujrubuKTAcVALt8Fov1NSu76UoLi93o5WzkaKSgWhM6zqU6FUWqc3zErfMrGzn9iQb8sF2ompDngMpcWNZVL",
  "key12": "5sAP9AhTaN56iCAyM98pTgE1iDxqWm97XqtmXBZRZmGrQjjnbgrK51k9hbR935Gx5V7bRWeAyeFW6JkiWtifXx33",
  "key13": "3cnEoqVSQSZPcUckRYgwFQQYXewqpVk43Rbqb6TUUHxLFsGEeQqoSe9brVsEpUAXKCeMkVgh8QoDtHRG6P35RNq8",
  "key14": "39DNgDf53WWUqiuoVD3bEAYx8EYkVjSHChWLRtXaraEyoA4asKFBZSM5d3WR3DecRtoMigsRhvGf8NLBBy26FhcM",
  "key15": "4X1MyrAzU8ZeAAeegr9Sq9e4byDv4hwdpmMpHq2PFSKfd9LAM5iuyqmPTyCUhxeA66igUGm1U4P5B7c5EQTay7nx",
  "key16": "3CPtakDNhYWoWWr8ZcaH3qUu9VUeYZLnr9LggoeAAVkdhxBMBaaszj277LhQpCta6VpKDDT7JB53Pm4tDKJuZpoE",
  "key17": "3EdYtNUYqvQu4FVrQ82YfULeiEPDk1iquNVpL9rTwfkTP6WJuVJhcpWd4yT792Arg4kWSMYiP99xAmFicErNY6EW",
  "key18": "2ryphjPLdijuhDAwNSNGKqu4ig38xMhcgbs9fdS9s2GNADMmvPrYRJREdkACVyeovf5C2khRohwa3MBTvxyKLM9x",
  "key19": "2GNpMKhNwAtK71wpyDLu1ExPW9f6S2pfSkd5CNe2NVe891vE5syC6aZQrs52TzCAJu9Y1t8cEiNByM4o1g9EsVFK",
  "key20": "5jq4kSb9fm69nUnSXs3a8QzLEoR3gLsJSysD8X8xs9gf6nPbaKLZ4EA3WebqG674CRdSy8qEwyx8z2ZESAdYbf5b",
  "key21": "3iRMbDoa7xCwK8mcfwhnzayqKYXyqaLWToPA44n2yigxkxagPfjJVpEJX52R9aN9AJ8E1rB819UPVuuYyv1kjHvh",
  "key22": "5uoANAZdLQrJ5cJM8VxKF8ELeB2u1zxcBptwgTVYBt1UQxAbCG34D7gAQHKPsyQkHmLQL46mpqLtvgHWKCYGa4F",
  "key23": "5qj26np4gQauJFDMWZQ7FSbVyA9Qy8W2iXorWrTnsut5F4LMrRgrVBjQ8hweULtDAMBRZaTwF3ejt4FFAyc41adQ",
  "key24": "2sW7bV5FyFyeRiJjXNVkNnjBN1KgNZsvQZLWT6AFjDxdrthT8J5z6Ba5VeZx6eYbPawdS4sETdt8MSxAXWJcV5dM",
  "key25": "4uSgzZKQi1wQMJkP2R2MAd9P7sGkBWjiRYtSnJS9SPUujzMRGhM8u7zXHTEaKkpnjGJzQc67XWCE1hA59Wh2Neti",
  "key26": "3xCnANw7j7zcoKMKNbDpEUegsbcbyteAqCgnjQQJtitdjgBSp64pXvythh7GHizu1ti32J8nDz8snPoxjGzkk8yB",
  "key27": "zoEJtc4rdQbtzoR83aE2bguVBeCJYMQHKsB2G48yU7fj2gcDkz4CEhvmCPcEiJmt82gK3qavEKny9hQPXPMmkFA",
  "key28": "2Anuwom6C2CkGudQsP58TyoRoz8ooq81sLCG66WTcavEzaQy918QDpkQsZTWVXaBGf23Wt8ggDExVEXA1D5Jzaut",
  "key29": "2ec7NHriBFJuK9wtXgDiXeupUihVnzHrRBFX3GqS2F1rKdDdZuLrBJLRG6S4Jk5AsiaS7Q1wZdQY8QdyjdzzCnSk",
  "key30": "kMGN1NcFAYMJ4868dZwkGG6kkT1Fdwc6vjFuoZZUYfSWWknoDzMxPr1bqDxCaENGBt1wu2FZL1FsCdWhYxcfxb9",
  "key31": "3WvD9Af1NHwaQas1Ez23XXuJR9jmibGTPD9jNW5VcYKBtUvhmALG5UxgkHZi9puziBwyuw5FUyVbcvCMXTQUkXcz",
  "key32": "27yyzzpq5iBj4yJBXE1D5FYotirCA3WPNdyyBfpZ5maUDi195WsJ7Jzo9tnd1CeLxnDWeMtJmrT751Fz14tmwbZW",
  "key33": "tP9TTDY5gvFtdWkduRT3n5AiRon4BHEoMH5zPHsxS4tRRH23XwEwU3hv3bGSvqQY79RFCeWJNSfpbZFYj6GJktk",
  "key34": "5dJfaBniFzx3vi5eAbfGv6q37GuhL7j1x7Fc4sX8RExQ48b2BnWSqZYbgjXgMSunLgkdgjeYcgRQLvx2i4CjkeR6",
  "key35": "3MHewoBN1HBSduCD8gAg4WPexDM61priEJdRro2baAr26DpxD3VxCo7cLfbdEdZyQrGCXR3yzd9fQHy27cz2Spke",
  "key36": "ZTPWUdbv5F3KGkD13KPUK3doCBHNHmRv9d7tGbxD2XHHnvfhaE87AohyZbFN4vCFFm5J8vPKTrtZbFEcL2Y3KRD",
  "key37": "C3XRmowoBq5WbNDVMbRnygD3Q29LcEdQQV5e5YBvqcADrQRqyLLXpPdUpi4bg6aA6Qu8jb4tuijFauLWRmFStXV",
  "key38": "4HEpXG5D7hXv3gS5PbSi5iiWPjooXL3cCHSepwPfDBQSYtgiykZqqyxmzC9oMvJhKfQCLx8vhDZMQCYWjC9aessP",
  "key39": "WAhS5z7oAfVuz8465VMpiyrkC9FUu4d77YxnKhutJVGXj6RogQqi5reSGowgN3g8Q7bjjrqmTYN6x1SKZnBLCMi",
  "key40": "4LYnSDY1BxvST2K7ZffMWJeQxZMmP61eboHt5faMzxx8XD4fVm9zxF6aXcvYxS1QM3Wqax8w8sFGoqZKqmAuKVfK",
  "key41": "44VLf4nfDk92FAwcvHYvDdE8YS96gVPpZXSHB5uY2NkAQwNTa2AEBdziXwsdfa8wkLrAN8jwXyvrWfKRnMvBx5Zx"
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
