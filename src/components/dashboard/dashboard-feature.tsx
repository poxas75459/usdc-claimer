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
    "5iEeQJmALJcT7WLwnAnsYRpB9dSCcgKK5HhN4soc4teXZXFmA7Lh1rnwrwi6eTZ5rgnpVNBuXGvYkcstJCoAhLpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQ8JkawUr4eBHqiKminBWkDNwgLasSMB2srDUHhcQ988aeTSVWd8k2e96MVgQLSsgbypqCpeU8H9CpeZV2B61ss",
  "key1": "5t2Z8VZpFLa9FAydLR2EkBiDRnSNbAc2qN8oTq8pPxYNheatWCQbvmbNUvuWpPj38Nd9q7cfqzbo7owN7Noi741Q",
  "key2": "vvNHCYWtxufgPQ1XsCXAN9igJTnGDMy96zh2P9siGRYMPw5m5uajhqSraVBSDxd99xxKta34NB7YBppGfY1UXS6",
  "key3": "fKrt3FcuLabGVEdcoGYbeqfeCP2BpnTQH4c6mwGmSvn2KcJXAGBDAjUBeTYcMScKbJaDosy7b6p5BWt3nNJ2T2e",
  "key4": "w94jRgccK36BuivbJaVFZV1odM8vWDBVFRhE7DWjsY4GVthdxKJQT3x6WdVZDWugrTdYmNPD4eTCdSajW7uPv6K",
  "key5": "5HFdzkwmiLH2CLvRXFJkDZAJxGf58mJhhFZKCn6QZz7cx78o8b6uvoYVPX6DyvjUysmwkiWoYqhprjcjY7r19iVj",
  "key6": "34rrmXbyJS5RqiUtfGHZM2h2jpUBCjVeMBW2NErZrz844zBsBJoPhJPeLUdx1oFNtccqpgWGpLJ1kLS7svMgLZvm",
  "key7": "5WHSoXbqMk33wjhiivHk3grrZividgH34sfmAg7sHVZgY19FBxdHwcEpBs1FbFkKjDMuWrb4VPFmRTQdG3cnnmuF",
  "key8": "cY5qAVS1E1M3MEKZCExKdwp4P6V6JNHY3y4FZkNnY89HrPPHtPNfS32HedeY3YPz53owcXdaUwgwF6TpQWeeTNk",
  "key9": "5vnoW5gXtyMuSzsDdKMrmRVQW5iHGezTYLoxRL9LRoL2FpKFLp5FmPF3DHZh1KVMYFZ2tD475hWNuvpM4Dc8bNga",
  "key10": "22brZqXHPaJtxnYqmJbUJhMYtMBktTs9qGFqnzoDBApwrvyktfDEvdbcutvowv4FKpzeLcAPavxnc8g9S87PA7JF",
  "key11": "2qnMEa8Cp7XriLc9PDWB5e3bbdPTi2mSPsQGs7gFggdMvUY5fQLd3KUvA8EBz7YDg3ZVAnzb4qLxR3B6LKPemUio",
  "key12": "3WD3UXpr93sX4BiiXkhTjg6DUJpHtd3eAEqhxqP53kEHnTb4Ag4S6PLSQSAqE2xLQLbSEqB4xkUtc3AaqcwPfEBK",
  "key13": "3sSq1ecZqn1455Xd1ktjVCXVyDu4UW3cRHJDeqdSXsxafYui1A2CceAnYNWGBi43DgLRURsjuX8YgnCBSqRDdqk",
  "key14": "4c7AsNaNhwWuLKKEtuRey4o7S4onUdBCGMsfy8pzguip8EzY1EfDb2EVh7fqopF4Miv2uXJdGAtpyLyYUHLCb5rd",
  "key15": "45KXN89gxbvYAfwsC8xHCLWJTnK71sHgezuUHL8GK2iiQoF2CMHDbzKtNW9TzsbNSzU1ePXcM5dRvrutZG1aTqnT",
  "key16": "5ec6gbjywQhSW1EgEAdYiaHoST3wQnXPFogwxkFLvCKQJyG116oaUGFVKNKGSQHd4swAmLNTmjpMexN7szNJv9vF",
  "key17": "2uEd5huQT6rAcioVWwaTXCaX7hMZVHx2n5HstuBKxbQihF2mT5eUBbDboVsoGjoi7en4Wx7KotpTFPCzTLmQCtQg",
  "key18": "2MDZtXgPsTfPHNRWL92ybHaZr9aKe6ixuXCT24UadB2hBW6NJMmMnDK2TV2pEXN24VEprYEMVjMvq7gS9W8cakm2",
  "key19": "KU5gWKDemUbgMD2ybxRTygt7JfBcnWKqJdahKx1qK95GtiFwFzgEShQdJkLENtmjXC77KJvH1eLiAnMNtKo9vMS",
  "key20": "4Ekaih7tqDs8M959iW7s7Ag7pR9nXi5cKcwFy7vuWxvddkyaoPPio6Adq3jggx8G2hsfu2TqNYhNDhfS6WMe1vwb",
  "key21": "3E6cSzYNMPuRMMXZaMkT1VQXofDuGyDZ5W3mMbzXiG5wCwes7ApD6W52GnctmWNagf4B72SasSygv9HZDMTtAoLj",
  "key22": "5xCHk5eGDHwVmqHdxjgCErRZnekzsW3LmWGqoKmigN9GJeoaopmYa86qZBqMufPBpegHiyFD53c7GjcXHZLcohCn",
  "key23": "65Zosjapk8T2SpUWekd5Fy1d6k6YVHXmjyet1BgJLEU7BsKRxPLbYLUAQPN7YCymN1WVSM9sgxLtoPC8mtg5ydd4",
  "key24": "2DucZEFPLBittEodm9D1WHqLiVBBgq8Pnhz1E6zb6Z62dQSH8p7yQL6j2v4bomdxdXtAeSh28YZwSK4scPvTWKQy",
  "key25": "3vRHxuCahbco5kqkkfCMWsc4x3cx2ppcB4kB547JrEVbWWXt9DAeydpdEyoz54LrwShYc2uFReHcb4sdTcW8XC1B",
  "key26": "5S1kKo3qE12LueDHGEJ226uoJoA9ANiP7Je4bwF3Vu1XKwkSWLFgBvQqqswtbJ8kXkVbJ3BYjc5EBfwnXoFW1gM5",
  "key27": "4wEXAHqWqsH6aWH3hat8VHWcJSPrgS7VT95YbaX58B5fB6A8WJ13Wxu8SKPbNqxrQG5vbbSPZBNTp4FVTmXuPxYw",
  "key28": "35v7Axq8QcSnLwfF8NaXbiFzgaSXny6Cf5WE5bjBVaKtu4hNTWRC5wnSBtanhkmRisd7WNEgQBSgVqg6Q1hKqccH",
  "key29": "4XvcPTYoYPUMuyUhVoeWYifx1miX3g8ov4W1f3uBYLaAqcgsHe2wMWDG5cokuoJkeHz8YLAaG4hkZwMimTfYWX7M",
  "key30": "CNHwUxyaRUcGEv3cDae6XnbtLYtouUuSxjNFyPVwXMKkoBW778gj21dit7iskM1PXXRcyqqGPJzr48cvkRxnw3a",
  "key31": "2mzUNvvRPmmBmfTsuXh4cY7Jxi3GrBSvcF9J9TYgWBSoeVT1BTo25rfZcsH6dGsecLN7xDDboyZgu7k3MJy5WxZf",
  "key32": "4xdpe6rDhpPtcWsrSjr82C7Tu9UtausAQUwvCkMT5upHE6fyngCgjaSvXyZeTwKqQhsTFtnARkKbscbLv2te1gXn",
  "key33": "5ysKjzySaBrKafPwpu7E6j8DUpdwX2FZv2cgXbNKmUjxTnUupEE3H8SrPUmtZVmYrZfLYfHc3VYgWaXpWhoXJCbC",
  "key34": "4M7WePvQnk2mTwLEDJUXoAZhwiyV6xYrZfsh6Ac83KHswQ92AVazS8jD4vrq9cAPDXNz849sVMyXFDeRbmkjTZ2a",
  "key35": "3iqYFEewESFY4FbCrLgzsLQeRLUg73v6YER5GtbQCLhjuq87RJHEW3ieUaoYcyRM7dn5vLZyJUnMyDZW7moWnemR",
  "key36": "3zNf8H8rj8kZcYWdKdiXDqHNtDEn1mZWxkjkme6XL7EjQob3GBkL4RpL1Jd7P9ZqcjqihQzKhL1TTzXQedPkrKny",
  "key37": "4bJ2zgGgdRCRBRHJ1odUtYUHA3vbeoKNQvxSyUgoj2q5Lme62d6LuFvSLoKPigLPFRiGh5FLWUeKp14rTfX4hxdL",
  "key38": "2MU8XUAeKmaEwJ9JyNhEiquTMgZKQy4UXqAh2Yu3pu1JYJYhCLM9D6rHcT12p3MB6MytRxvyd3yaM7pFcfv8Yq9G",
  "key39": "2cGs5cMLEFStzotXrwhto8KrRpr2mWXFTuwEYfUnLqoB2orzf77RyhHwx3LwyxuxrweZFRU3cwuWye1kWEMu3vPW",
  "key40": "2eM9Gryfn6JVMKPB9SAfdy2PuZPMuFk8YJnv7YZmVd8V2jTnNPYMociMhyaLVrti1GdNXQsvVwv1XiE9PHErZ9hD",
  "key41": "38DpARHx67iuHQN46BB7KCCchu6LCGSBJU1sqqK7emakBBNWkYohUnaZVqzSyqvEdwYJ4VinZNG8WJ24gae9yZgj",
  "key42": "2WTVDp3Pqn7kfiwTbGGpsLefZxULGXKcakAp6dvc1QuJLXH11Av9KVuVfp1qfxygZrPmxkE7W3DrfrnKizzfsbEc",
  "key43": "kgQD28vRi7Cc21B77qU3Rn6tfisg4Rp4Y41HWH4jmfcLHRqdfAso4WSXGs4omtXPyEBa8ASTW7LUZzZgSxjzAZS",
  "key44": "2UEnW7NT4EmaS9NU9VYGwZsP85i3GP7bm7sHcGxnTHcACZd84JeBYG7fncQ1vNPbSWmnYHrbBDQCS5JX7zuDiXTX",
  "key45": "gNjjLLevhAEH1C3Znckqd8Qaf9cvzeT86hvtbVoiYM4wSiH4kx5EKMuUJoByXqBjEnW5bvXZoBNcaUHZ28TfeUc"
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
