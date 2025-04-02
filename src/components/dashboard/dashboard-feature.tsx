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
    "4VZ5yDDWNsCVyEgQHoAQvC92j3EfPJmYYnj9k5isjyQ921kixHmL98TqxX5z98sboe86AazVQrNdwoNAq4WEm5tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p1BT4aXLifKuyELYPoEQ5k6eETTMCFCuuf7jFhR5Tr9EgjDH1BZmTPEY1qKfG6j93h8JL1TpshaUMb3FuwMsLQ3",
  "key1": "2bcn2GhevGNngRw8uWrbVzP3QiGLs1UReM9etqykAvyYHyytTVKn53UmAKH8aJF6p4PA1zAvpaqe7Y6SGfdnZPKp",
  "key2": "HfDGUfTkUCxo4KDdSJs9WsLpUv5vq34LibengD8fHcX8b6ttcsbxSkrKWDpoAA5vYqLqNiioZnxG8VzJzmFTG8E",
  "key3": "4A4uSJ4FFoZUyFuf3aCeF7aD3XBH8rVTYEfG3WcZ2PJrdkXDrhqFb79SjsmUu6rkjDEDajbTPWQfHGBeegAscziP",
  "key4": "44kxpjYEnzj62LiCfHkDDmihH51SG1mrcCDrv8WcRakRsYmfUr6WV5Vd68XakZhWGC3swc6QDxbJdt3PatgG31M7",
  "key5": "2mqndocsEY33jJX6hzmbmjdL2oKyER7aYxctL8crkwrMjgAWvLyAZ6sfc5aUngNendRP6ejZKTsZMsQTTFTPg3Xw",
  "key6": "45TUvS9PFw3yotzAZeLVWf4aMxjD77s4UbtaDrdCriggaH3WRar5xU4evPYfx6K8SQy1NmnMiAwefyzGWTJmV1ff",
  "key7": "4EgLuQLvusWgByPnkDEZ9CGkQiWkQziyy8CGSw5wAoXU5Nd1Wpa9RA2GSRAc3VZ6ZfWdt7cvCzYrKcseqzEKwBTc",
  "key8": "4szmXfdHd2sx58rwt7HSiLVVirVQ7X4A1NGPG4HzQpakFTAEUpB9mE53LE3G8qfY4yzVuEzcfKi4j2TVaMveq16z",
  "key9": "4XfWB2sW2nP257fjvCvHd6deoGipGNJhZzfrCwFFPp4renUZVqSDwNeBvmhNvX9fiCBfWQA9r4HhbBAA31TSjvqE",
  "key10": "5FS8FVayKm1KG7bwy1CjD5tyrtcjScgSaEXLgxXuoMgUNm5LM4GUEXssbjM5Zj9KEduit28wdsAGLsvz5CjMDC6o",
  "key11": "4UBGWaG5FuRefSqZpMMsuDc747ADHVmWocaCBZHbaJMJRPhJkgrjCbgfwY5foHCP1ux7g8rGMe8gZBmWHA4FkxiW",
  "key12": "3EKuFzvhHe7GJcSNxyWWAxNXfk7cUnZfaieoMxKc8T5fiixHotABuQatmH6PuTdrKteCqCFTEEh7ednNZ5oXdFr3",
  "key13": "59hqJX5UJPXokN1TVq9nt5gowChNKBF7MiAU7rcut48nTuwjN2ciLDX6HYWsLLWYejBiKbKF4HtqaizfzC4QvowR",
  "key14": "VWeZiLNpAzSGrEexJVA5eGywveYwPcJ3fWcxc9PW4rEjUA3hNur7S3xTYnjMhTK6J1a4bVtCaQJLzu7agTJpCRY",
  "key15": "61mpG7mjyKEMoXPMmTquT6SGYyPgVq3LBhRdba6D2m9idnAJdeZ1Eecz6W656Eqn257g65Kp2dUZh9qcPWU2HmNA",
  "key16": "3uDxEBNKiDoXySiSuJv9tPiqqJEXerrS8gp3nNsyJp2kLCGHH8JWMivMa2PiQih7hbeGbzr9Uy3DsqRiYxbX1JP3",
  "key17": "nvFEKqKf4GnCjUADhyEDEvM4WCVGiVhNLYXQDTPqpw1aXEqVCpcTNERqd18ZJZcu1CDdYHP4Yjkb1Dg6vz1TvxK",
  "key18": "3RVYDQu3XPYSTrzFnmPw2TLeoQJh3VWvySBHp9Cq3Gn9WFvPwCahuUWfZ7tMbgsYiBxFm2Bu5s6B2KBPZ7hwtfYb",
  "key19": "2nuN1YMFvhbrgJFaCCFnwJL4Mu51fpAjNTjS7gkVifKaNZFwr3G8vaWDXMin9C36wrue9pMXgeXVda1Hf1MmVs4V",
  "key20": "4Uo9oAFukaqbvuRTYSVcZqndzMczhMB6wMT6A4XB6fqmgguJoAp4QjLzVbXsgJsVEe1FXdmemA9mCkUxZU9uxw6b",
  "key21": "EQJvqyUGfbjY869AdL1eBK31Hh4KCvXznkfRbyHLkEjPgWRBxNfvfJYsJtF1keDsNfRmhz2ThVWsCQBN2ZhvLDX",
  "key22": "4HnPCu4de6q4QDPu1JRPhJwZbc4z1zuUB7SUYQVUmTrv5rkoSmAj9RaKhy9syFQfJSv3w68Mom7fdaf4vKXgXMUF",
  "key23": "43wUAFEPPJ62VkfswCwXbUc9gJ78wvS9uNWihkPVJpGQoc9QbCxKoWHau7Hvbeu9p9H8GA692h635rzkB7hiYjuk",
  "key24": "21e1ymgTUdaiUimHaXwVcAMnikg1wDf2RiHcV2wZAuPjzgVRPvmWVL7i5PeRAFmv2vnXuEfH38a8TD3aH6PxM6S4",
  "key25": "36BUa19uZBrdRdrPTx8Xsw9wbkgpf4LhefDp3SvpjTtTb4FKkR4uXS6kZPo3k2K1FCqNF3nEukHvziV4QvPgesiF",
  "key26": "4F5eQrofHmwRWzEbTpVVNtMcXRnHK5RDfMUsoAcxMnu7pNk2aTM6c4pN6cRxnzpABeRyxGoy9nD3c5beksuhgbor",
  "key27": "42AkVcHMtNTiKVD8ZocFtXmgsS7axUjRAXnDnD47hYTrXXiww261JYRC45fLb4otifshdGDEjbrsYG8bhbkmjfXT",
  "key28": "67qbCprpPikKifVKfabXGXgKVTfHpQ6idKz2jrbLtiKYzBg1aXvQwmRDHC6XdtP8XUfbZzo2ZAMbxERmhrFFiTXw",
  "key29": "XJHcJcWSfURf2MCNQUWgUdjNq7CQ58EEAQHBUSqHu1ZFtx7iGUoz1e3SooKaZkkAZuxuiSuQiMSKiBj6bf9QP5D",
  "key30": "2UUUi833FRxct6oDhsCkVWFY8DtYFzokzfyqpwvJkQimFgoccFbWoBNpLn9XMNGLjpAQT5z7JJS84aDBg83vfFBK"
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
