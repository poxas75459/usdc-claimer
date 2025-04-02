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
    "v2RxufNUmVAWN5rUfpJ9hiQATHRrBh7HxYLPXv3NcZcQv6As9HU5Br9bEpxeE9a6iPcQFaouwL9QfLDutJkmm5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LbM4EQsUbLEQ1Xa89VxADL73k9qgZoUsoEdak3nKZSoET7T6pMxcdor6R5kZCPnECTK3WujMb2dm7gJLr5fm3WM",
  "key1": "4RxGi5BkhJSwZPeYEznP41CsXqcraKKu5bznC6yK6JaULvJhaUGkJX4piD34i9aoLL9DsMA61JZdUG7krn3mENFW",
  "key2": "FSEGodUChbC9cVYm1Xn7hCxRcms3sxo7PGQKKsBUZ8yrHz5oSVfbA6pG6wPeH7UL5No1JmD4mCXXu7TA512hx7J",
  "key3": "41T9HdW68zH8LAu9LnySQpCNuy2dZJpoBxVTkiW9bQCYyWePXvjWEiwEkB9qkEYEAfN8yDarfpNuzsaPBFzBg9rg",
  "key4": "3yNRWDu59KUWR4wdci4HE9ht5i5h6V3UiYTZjQ1wFnXEPfScaoDPNJG4kiXFrzr1ypeopTLVYoVfmHQfQqn7mWLv",
  "key5": "3TipVY5r52tBEX8beZUjYrA7wdEdpMCvNHECzy9aNihHVJ43T5KbqAuBSfTnbhG2it1VoUdHn1p78tqH2i7Ubfq2",
  "key6": "5Vdreaw77S6tHp3xxL9A6JiKXT9Ha5h2xCwLYrLqRmFaLhG4DgStbrbGg3s9TU8BkPKnUaFDwU8B4KJDP6rJCsir",
  "key7": "5Y3QPA2DdhPt7MDKetnH4LMHqn8krrNo3wMywbZeZxr8cxirmvfkrHD2M1wAXwu3RdMQo5KTeSYAz5vKm53XruD1",
  "key8": "36c6fZZP9CENu7SbZt9aio7BViSE73mGe2hnFaNxApWqbYMszHbrK9nEGpKbr89ZDGC3kwMWJrvgv4F1e6JHmrWN",
  "key9": "4efaGkdMY7Xb4q6BYNtPHS2PbqX1AdmHSZJ3FDK5GtJuMVY9n2AVG9HxHHZXrptAhQSnZPnGbpkg8GRX4JF1nrvP",
  "key10": "4YseDWxrwgwYwPFFwAskGKJhZYqPFaEZ17mripAhEzfgDwHCiFK8QyuyzgyUwrTyWJccq2S4tTVxwsgTvMABDwAZ",
  "key11": "2XfP58fvXAh1Hg5ER8yw2EQRDLobChnNf3DUTZDETsg8pFGNEN5akcDnisPqhPcHWdbFcuxfpcvWENXUwBQm6bCv",
  "key12": "3MzXczd1AHHe1GFCAXEWoYSwgWyV6jC3DGBEX6NJEUZ6BkFQxj2pFfBAkySs7Lnmun4dWRCSCUgCk9hqLT1wWFRr",
  "key13": "2UZzAK88TUBQSqMweNnfa39W5rgDgiA4cWaWeAgd24stmYKQdc1zdrzFDEsKkgBQNF6246o4jxN7E8t7XCNT8Kba",
  "key14": "2aFS6TChwsgMhVpnSkAjU8azmRVxeXRTKLZRXCixkFuQuSCy351WdVEpNK1cKYJoxrj1RcJBczwBCK1jFZE39uFE",
  "key15": "2FmdeQz5As6cSFEjLjamxggEMnWpySqy3iU3gZzSa1zCghLZ1SVC8tf8YSZUp2TmK54dkuLCiPPXeRAS8qo8QpMR",
  "key16": "4HmsocS42cui6kSes5RHBwTJWYtcv53nswWc3ccDJ7wQKJ6YHtdgv8a6vyVG5mq22VJQaEGohm4ebUQ7ui8b9rMA",
  "key17": "2PfT4pCpdSdp1SaQ2Z3fzzwY1eRWWC4vMPKVPe8jevQQ6kNREYKBm9nkP2mSpgmtB5JJ4XxneEfh1GowXhpNRsff",
  "key18": "KADZxdE7QxdK47uEvqbror4FD3zycBM5QHpW4uDqkccuH9LHoLnJXrggjzkiKA9UH54SkXCKT5ncFBbY8yiSikp",
  "key19": "5qXXeJnPBxjmvew22FMtEKo9WB5kUyoU92yTm3rsyGWDEbwT86MbrxhStJCBmPNUYvd6XLv5qiGFt7qX4ZX18qzx",
  "key20": "4iJ9BRhPFHzn81Nn3WcuLVc7apojgnVfNAGwDU9s8Vx241nbvTpdSCKkJP2xXwGPKUeWf3NJm78HnZdnsGfZXtNi",
  "key21": "5n9jQ3kBXWFjyZWQRPw88QqYZnQSJRW68YR6K9UseKpQdURamjxagddF7cKZd2tBqWYm7ee8QfgNvqccBGNL8h2L",
  "key22": "KACbT8fTYpZ7iMkB5NvaaKydkaadmkgNtw13R8z3smP1VBLoUsJ1CMj2HJ1P3QcW1dGLQxmho8WMKGRDSiwcTn4",
  "key23": "59FP1ABHTTmDdeh1fUHfcMxS79ucRkj19U1oJyaD3aXWu6NgGJTNdMhHHwt6NnD9GQ2T6PEvc9BL6c82imkw5hiz",
  "key24": "3rjYmzgFmJAKXFB1c1dMsMESw1Hta7S6qKNvxH1jqhD7adY8A99ueYwy8LCbJRZLBnXvzFUtWkfBpGaUZ7gYwnqr",
  "key25": "5djzfq83S6RGTRxwg8Mam8QiPcU66BcoXA66QKjxZ6Lr1ZRzojPqKNAFtCWfAPutvgReYHrPht2N8aVTQFj1sbMt",
  "key26": "62SAbT6DWUCMF5G5rScoU7cwZUYfCNmtgq1rMJKRZUoHKjKNgAEPPrLkDwwG6cHAwUQd9xArkTCCu2fNKEXSyPCx",
  "key27": "5CD82fD1y76ktHPwm5WxY341C5c8axVepgo5DW8ML36n1gVq1sadPRaZr21ydaSFoCVExiG54Y3aEoFozFLS9DUH",
  "key28": "nQECSGda1XHxqJBBL7TZhEHf91wpZWp2tEsdkNiCqxs5RMzg2fpzs1wWjDbWj2QZgpphpvZb4ibd1SM9skj9SZs",
  "key29": "2xmMAZQnXFSjgxrzAVjCYDYQfjH6evosKeXAQGRD1cpcz5juh3gbGXBsUzciV3venpFRGsStYngaBY4ZZgv1acer",
  "key30": "52RcWhWEhA75gp3qCvPoZnVbr5sUvd7oJ7uogzGufGRSzVo8KQx8WddJenncztCHSDFAoEjcsHPzK3mos6dnrMmM",
  "key31": "3Edpp3FMEw6NpmU19atPVJo19pzNhVykq1dsrETnV1UZ3s8VHWzbEwx8iuq51ecRpuRoFPeapgvwdxZF99oN6rVb",
  "key32": "2avaPGJyixeP4JyRumAMZ3NZ588KTcrkXC1uZi4sMMpD3SDw75Qs7Sb998kavXgBrAJheWLxdNh2TgSknKuHncsN",
  "key33": "2kUcHs3eQWg6uaVCtVrSqEUWzvJeAT46P4SFQiuVDmWDBVKV7pyM3gLgUr1BiSPuKraCXWxfreDqhaDNHop2UNwj",
  "key34": "5DmzVGxyCwjKvmCXT4oCMycCpowjqC1XLTVxShfPWqomAg887aJ2m98u1G2JyD5DSKsHWYgaK1VPrFUxTb9Rsio3",
  "key35": "2SNFGmVWgvULxz4Dg2A1gnqoBQjc4GACNZqNxxUnN5CqZqBmNJVowHVr34cCxAi3VC1EgNuCDdRMGQShg5mGpSj6",
  "key36": "kpfdw2QrTXZrt3yjx2P4o69USf7cA95NMTsmBft8DeDf7gt4kgyt5JngeYBf629z3G9BzFaC2y9zsshHkcpvQQ7"
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
