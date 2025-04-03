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
    "5jH4fkhxwmXFeu23kUHy8NSBefohN39VKXD2M5jTSQHfjd5gzimjmBamYPMCdA1CpknbEJ2Y9YcxZ3c177msN2UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLhekZrDXqUNVt6pr42Pv2dowpfPUtmbLQSb6EoMhowmUoJ1DkJuaBxudvgEJeyjfZimW3wLZoKwadCfkC141k5",
  "key1": "4uJBGTkn6ucFL54zB25d1TJQKSNSwfKFTGgCVHsgZXnfpbNFmkV1tNHm3tn8KEDKEzUiPvNvZZmYwTeuum5r7eyv",
  "key2": "4B6JS5cmnkDQde16KsRBoWeHt5SXsTd8vsJBmQoax9JBGrKxQUdqYmwxmLLoKL1ApdmaeFmpnxEfYt5SQwQ16wxK",
  "key3": "3G4ftbwPrP3mVvzotYKPnxWu9RpZ6VfrC61NFhre5oPQzrBoDGhTgSg7DatmmbRsh4T7E31YSVGURYiJkdo2RiZY",
  "key4": "4KaW4Ap8Cwkhhng5axtpxzgfZqwYiNYUuCTDj2AZy2ireeoHJqFsPgahYQUxHXuy9AvsPBB7Um2rrTF3evCaCppq",
  "key5": "5ZEYqASMVsa6zxxXD1txbcLiitcMYUiH1XG914S6eFefSxiYTmVCBpEa2HMJn9gG2sUwRmz2NKAkJU8nPDAdXvdU",
  "key6": "3T8C95PKqtKgRxDcFgp4MCS1GHkziGpW9e6k7ycwPpzzhuF5CiPrP3w6Mv6ixzyr4yzkbLY3wVKwrgws912GiMoP",
  "key7": "4CZp57Y5r6bhtxYHG2r9ph2mPgSPrmuxxwaYDAMjpeZwQB25LK5JxTMxQxCPXdGHUbqdCeonFA1SubzUQhBwxSc9",
  "key8": "WB8LNMSzow94kMF4QiQfDBrMTTNfZtWaDZVeJtHzpeCoQrS92VcDco3s6BxHCcv8sJ71drQfgfj8X6VhiK5bb3J",
  "key9": "3GjtTnS4WXM7TjqKjtkMkXLSA8svon1TX9vJEB9CpvQCSChFdL2b7eSyqZZ21LvZ33JjdGNBhpC7K8xQZcPwYYS9",
  "key10": "2NdP2ondy82yKXfTLxLq4W3NkMCSKsMExum4NRkp94oQTQfmb3QLG1JT3oDy8u3zzayFMYbdxtGRjHZ4Djb1H37m",
  "key11": "5K6wrdRxstLJxeTEHbn2mprCNR7e81oRZZn7UoDFvekz1WD96ptP8xKQwJZuBZxyh1KF47XHYvoyNXJeAUk1mEAh",
  "key12": "nmKvWpUCrK1mMKpQMmUUMgzhhcaSCYTy6TUEwAasMy1qxwv96e2yCSa2sM2YavoTp6zx5S8fuXn3zkva1wS17ic",
  "key13": "59t6y7aKfuZ6AbzHkpQY98skgGMNxikT6C6hnDd6xWNfqvvwD1syvky6CtwVnsKdxGxYzUJ9WXa1ZAMMYQ3qaBUi",
  "key14": "cMdWryXEsLwmSpv9hqBRLu67BizGLjD4JssYCLJDChCb5f9nmQdmgtf4QKLnVWMyxGqQGQPkBeBfE2oKVccWL4v",
  "key15": "2DoxAcZ1wnexyJukwCMN4PzZZcJSsPknasoog1TVzRtA2dZ27qdjLUgRYui65USQg1fAVZNBmyGbwGNGEkqD6Cxi",
  "key16": "5Q15xdVcYbcTbBPKKFATEaDPno2M6pBKDHZNDTPtKDUKeZjsZY6yJTw8cmdxWEPVSaCXZst2PfRFRQSCe2Qau4iF",
  "key17": "2phyR1M7GZxfzZyk88miNxgnKjL4fJ6kNUTYgUG2kAmtEYUnKaNvSye6Y7opG33VzKVjWrngeEgM4Pz2ChYYdins",
  "key18": "42tUcYGWx913qSasuicxLF5TKxGqepiqzzjNRwFNHAkEdkmLSZMWXyLMpGkV3739PBWUaPrDDQp9MzNtxukduC3u",
  "key19": "3AYzhrzCABtFoGTGbcEWHbGrYN4cuSjETRhzoFGM63ZYNbuhprdUsDiBNLbM8L9mGZ4PyFPSK3AxuYaqj2LzkiWJ",
  "key20": "3ppuF1VdZxgCbyQHZRMHq1xXBZn7Ba9K2ZW5nPodSNxnwhmiiqMee76h75HdZVNjJTxtBebWcDW1dNhrbdcHmA2h",
  "key21": "53LQ58QJa7Bo9Qa3de381HyuDt5Sei58wweENZMhqg25F6HPJXUJD8JwZjJLtRgC7jaNhWr8rduxQGhHoY9W8ss1",
  "key22": "2s3C2nFXiv3yNRCXKg3yx9MsiNdc8MGk1QQwoqddxxCt3ZtT9nPwrXyTexLrN99GNdSw72Z4U7x2wHkjkRMQwTsS",
  "key23": "3UNk5otJpAqiAb5uj5x8gySc7cG2AxJXApLHdWs7XitBraKYfiBZhVsmW84C49BGdzkxEFMwWdwLg8EgNcwe6Gs4",
  "key24": "2DvQFPGHhoRDaUXFBYnYSvkNQNJNPTgqRBQYQuvPEFt9iQ6E1VcSdLL2tLianrBycMkgjCB7U6fiH4JnrZUGNS9U",
  "key25": "5cafeGr8EuSpSX5HdSCMdfMDBQjpWYmVNsqCgMtUztwZQqzryqx89hX1NzcLiFdvBSAENggLDTMawB5xN6FbkiKP",
  "key26": "4tWTZiTtooCe5aCfHAu8kVoj6i1ig2dhH2KY5GyDCMND3XtFse13KhbGxdAaAXrAUimyYEyMjbdNKyZDBMGmfZfi",
  "key27": "4s5mSk3oxpuhfYBeCXLF6PoKqKJMrdsPoBYMDtUfaZVhmfFyvxiHQPG2GpdHY41P8FbQYxQdhMk1RVZMrFmWb8tf",
  "key28": "2ieCsbjoY8XRZnbNPRzR8gyKPLNH7RqPghBAqqDsXJghNxY1uhCpykDm5Fz3GUsLJuJZW5aFGhESLsmJoBfSjn7p",
  "key29": "2azXBz9JS3cx5M9LS6ogMq8MVUpXLtDauiKLUnebyDcowmxSEcfVdRZTnCevf7BFXVQHwHJrCcg6k5fgoqVocZnp",
  "key30": "65RmvRCPxg4p3BjmmEmCqcm4uW8ZDGiv54o79dMEt2bCCXKfKVFdJqXuGz53EcKF8Nd5q4hkquxXmYRBAEz94WHy",
  "key31": "29QkABpuhYdMR848aRH21QdPjVWxagWbZByLNsD8wtQYYGpf7tiwZdznNV8nXyQpUwxb6SXePHfGNMvtiWW4tSUi",
  "key32": "32nvhme3EbbnUDKSggU1r2tjs95bFZvHsUvhq5GNW2oeEcRQ9ReXJznhcRbvb7sGHAyVxXscb5HcBe4sgipwgsRS",
  "key33": "5WigRLBqPNtvHiLkP6XkbotoGEpBf5TfCMvHTSZvjUFgEFFWn3BfMPHKnmfZuZVXNx9fpgsgh1XMkw7HVyjbCagA",
  "key34": "2KsoCuX2qmEBcD6K7zDGsJ1DYovrGAa8d4VRbHWzyo4BvPp467Sz2tCYFsQFBuAvF9wNpEVukeD8E52TknXJqr2E",
  "key35": "28ENqUw5Y2Tkf3jnihv4uuwfqbJQKMLbyRdy4bfyJrYUyQztfPaXNMrtDqvQ3mg4HX1Fji9eQdRcWJrRWxhUodgC",
  "key36": "3S4vmNi8W3wZCd2r99ryi49nTrVtX9MywPWneF7VMVZpdXCVo7hDK121SJvmpx5p8QZtB3X4FS8aSUbWggBpm188",
  "key37": "5wWPxziBM97sKQUGUXGrtEYLjmKwsUk71sNVXqRzPDFPuzxizwWKTvmneHroe6JAa78c3hvaFtP2NMqvJNN2nDi2"
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
