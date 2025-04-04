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
    "2y11BhxGnwrhAHZpZBDtinMyB5q2dbcsJZN7Lkc34MnjrjhnDiCJP4mCoXeUkuf6LXboihhAwavZYX9oH9xLiWUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PF1cADTLc2YdGJZobpFKeTLU4mSHUfh8qVffEgVJAvPXwxzHuswvsRQMNAtu6CFgS1kG1SgQvyGzYjgczKdQJyA",
  "key1": "63paXGmnusHNcLiYK6NmqR8a8u3zbTg3NSHd2oCgMBs1wrVhAtk7HDXFog8TXW9AEaWQpA9NWdHFcJ6aQg1Xtfm3",
  "key2": "oL4skR6ZTZ7e636XYKba1vEHv3PHGMyDg1mVKzDWpHSkRgcpTGUwh5r38Uaev2KHKf9Zc7JrskNSek512bhFe7E",
  "key3": "rkTQ5eYy7syh9fJsjvricJj2i1JVGCJoF7bzxDuvKjm9rz6y6K3Mo2QnvNC6DuZ75SxZKvEYSyhJuUXyuuLnG1K",
  "key4": "4JVMnED5Ldi6opamteN3V1uDm6deXjwmiBFXEwqnyNEGJWY3nabAXcemt95HhxWR7FqtBJnNxueRfnr36HCVyASK",
  "key5": "4AjgMyv4uZ1ovTrZBg7BMARycd4cxRgFQnhCLuZN7HD4vY5xpWbJVyNvSyqPxG2YU4tKh7pUajQ4GXFiqJQB2ezX",
  "key6": "4G6wffXezh3Xzizgn6nqRdzhw6zRHEhq6RxrTg4vWyYV6L1Q61yz9ZZgebNemKTVYga6gB5ZqJo5betfTvBGEoQj",
  "key7": "4rP9szEVZvN5DeukxQvHC1xAwNAStArvCTsRUvZnyfNGb2MmgG2nGvU63pfz4tShXUWw6FDadrHkfMgenwNAWZUt",
  "key8": "4UKDZin1DXsE9TRzQUbTvP6X7oB85hr6PPn4apcxJ8nbbYSpEAKiBob78SBjJ9BYUscKc9gnADZBjjx1gfraU3x1",
  "key9": "xTSL4HVPnFxfxTNjoExVi79myCPWgif63ty1wnRagfv4awc51gXW79BwQwCcomufRSB5WfDB6Aih9h7TiXxDjwC",
  "key10": "2dVzhrpVkzTcWcEWzS6uWwgVnsU4U9FT8CMYfmALSCRUho1sD7TZLDE35JtnFpUgb2qNzWy4YPu21wqu9BrK2wjo",
  "key11": "eyMyoMjXu4rD9Z1ghB2HcAJFEtXa6h4ewh6SiTBbk3C6JWpodyfnAqx3brxkRBBGxfozcBg1dWirXLU2b9Uikwk",
  "key12": "qTBMjftoDHzFDXzJ4zXT3ExtUD5b3tPkLiCvsViruxkSfHeSSmxbR5Fjz9LUZm6QvGfCMGmV99cCVxqnqhobdfq",
  "key13": "LQPAULce8zAoXRSKWd2NerhyYmdNMEAFovfGiYDHc6z2ygkDJNpxGXbEMzMfbgew4RNejrrqkPnCnzkKDN14Buh",
  "key14": "ggDEosjMp9aTSRDHtDLQyVwiZuZjRBJFtkHGtvTwZcBa9UyK5mq8t9KArKVW4KnCqHt8erqxUhH3J8goPNNFykr",
  "key15": "31TgWAKth1xpW4wmQ7Lq3WxyT2zGGuRkszok7Wtz4bpKsUut2msuZWFTukNwnQhLRSsnz8KF36xVTzmExF4UBYG5",
  "key16": "5VhyYZAFEHGZbX2JRDcJ3b2bjGr621xsExWVM4ZeZBcEgGU84QMxBansioZDHiXxDbMfvRVwmm3osSxmHQBst2fS",
  "key17": "62fRWH8XoqCeW8AR7bYBBdJNanQheG7m1PcR73ZQRGz8Vc6faogunzTiip8G4cSSPr12QFZkWB7bk1cKxzXiM1i4",
  "key18": "3NZFBkA4TbqUHeCVgKW5r2pHox9bjxzAYy5GJm1L2dfJfTDPUnx1cJN4ZKj2rNPPxfSed8rWkcSzvnEp9ebyF2kH",
  "key19": "3jMcmjXSkKTeQLNGhMQBCT2TZeJRu45BVYviBQQmn79hymd224FKHvTNZXmEouaQVzVsksYzEAYFbg7woxKjJ4Yt",
  "key20": "5PtEek7ybyFdbucLqtXEaWKVQ35gFnuFb6qmJMmv2rrXqNGBZNzXR7xa4SSQwcEQGo2j3CLun1hHmCuo11QTsjH",
  "key21": "4ojgyjHoTVeiTwcBAo1r5WMN8ePM2LqQqzrqP3RVF2FkbWFGanV36dtTTuiQpx1h73iJrGeah98sPF6kUNYq8nt7",
  "key22": "5iY9WxbCmtBgytHeztQRG441PJ8UzALjQhXJ8iViP1zcAjVNeE8BLdiUiLzw917otcnAeLdDNU1SkTgasz9jkdiL",
  "key23": "3eGZ3zxzAvub3z9HtyVMyuGBrjCQ7XEDhf8CKPGfS4Q57oEA1bzgzpdpzk7PVze8nyi7Wrw7tDavi4iuVmGokKYg",
  "key24": "4k2mcZwbXUSHYRxgyf77yNtYCXVos1w2YkL8EGHQax8L7yQzXKQcjTpVGYD5oGkzq1kbAqQet4uswgLtcS7eBc6e",
  "key25": "2K4t38CJDvam9UCYYv6j5NQbh14zatqzqq14z7f2gSYkrYca9cY6EvSKnYB7FzvLijsfWbAwiihPWRMVjeZ9S9vf",
  "key26": "2jir4hRfrZejDdbo4BmkYmL5Vkq7cXsrARRoT1GXp9GhmXKfR13b5vMbn8NauTk5qtFTtjNEg5Mk2H3xcHDC8nNZ",
  "key27": "2uNXbqX7D4zzxjggTZMk6hXBXqzXci31vk28pTxxcvqcrqXd7upiQTigkrd15bT1452Yovyu83GLkFb3eDXaFDuR",
  "key28": "3C8DiVvgWYijkhA1H6NDQwDMKuivTRdqVU73YpR2RaazH9QH1GDcTuuuyZXCnAGgzAWotKM9q55p8zE3auUPvUeu",
  "key29": "3w3THQqqa9ANau5oPwsARs7mdBuwNki1L45qWiLsE21pHbgJX4vnyVZqZiUZCxbaXPWcT5SBRQnHdR1FiuHhfARv",
  "key30": "3e2dh5soo2ekDxGboZyPZBbQK2xoqXSMuT6oopNMqh3YWqbjccbyUGZfYZ3RvUvfD9rPSieGi2mm4KJ2TeaxYY2p",
  "key31": "3HsKEub7GGes5qxL7vLt9KQ8eSGEi4GJ6tcgpSpucvPiDhSWWqEo9W9xiudd1zaknUvorudh5Xkrc4K67E7DLNyK"
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
