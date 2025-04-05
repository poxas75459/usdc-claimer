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
    "2UD9K9o3oJWJm1L5GLB3JQRDniodZCeWntu4ZofEjqdmRBv3Pw3Wz5epP1SRj2QfiZYzt1krREaXFSJ4BSuree2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXoCkouahDAWC5RTjgqVJjc6wtC7iAqRKn9uwXrgV7CrXrdUNeZiCSGaLpABnKCF41qrhNb2ALZtviDNUyNDsP7",
  "key1": "aYtUqq3B5AFysAHoF8FzooXnKWtxd9iaBWDH69gLjJX3UQJsoTdW7i3wfuhLmm58ggpBfnbx9jENrW3BjY5Tf7e",
  "key2": "2Can87jNMKQTatvLw5UBek2iB4aKgmLV7oJHyFpNavNwQzkrFtWf2haEsCXZqtP2xCVLp1dSRmeH4VWoiD7L7jCE",
  "key3": "2jJXJYyLDpZU4pgaMVF5oDqoLDt1ykhdQ7vtEXHNRbs6DZogZxbfNm5ftcAY6sJ3BYu6LqJW6mtWDi4BXFzc5fov",
  "key4": "61jYisQhbqZfK2DoxtqjgppukzMVehyiS7qUpKyJ4UNoSgseWANhtBJ1TJbvdoRveLjVyEH39LTbLaeTW3Ny9JFk",
  "key5": "V2FD3MkeHFxGKwWwcS98W3VwURPCu1Hb1z5ptkhQRPeBumSu3d3UdufJ8We57D3ayu1NAyTD54PVqsTYT4WNx7P",
  "key6": "ASTygyzfh7KTf4pJNnSVWk87pT6nJA8D4X9UtrAHUggNkHCx8z4yJ9CSNNgFhrs4JnTgi4npwg2mtmUnpUCtMyN",
  "key7": "2HLYuKHzx12iS9d8vdwt64D7Vi5Zm1yg5vQT36vWaJYcJeGHu3Zm9p8coEZwUCyAkjbddcTGsQhq77vZew514wx6",
  "key8": "254PzVP4UuAz7RvXsuCBt8EpvXfeTDLDigibowZJJJp64LDZJbJeQvZXKjgN7zgpW9de1r3vUu9SBg1z5g1oUAeU",
  "key9": "346rFM1hwjuWeECWzGXQDXXA2G4ngRXEHDjkmnwSc2r8eDQTBZU8rNXDwcxxXGFSAj49AXR23aL3zMLwh4MPfvTp",
  "key10": "3UzhcSNFkyZwfFvAngsaBAooTGu4GxpkJkCW7MemLxCMBu4D2QgJDBtvSnqJoM72ZATSdetCZ78jkpiEpyQARQxW",
  "key11": "4XXRT6p53D2dTYyqDRo66nwEFMZ3sSMF2GNz9tq3E2SYgyPTgDGpQAC5X8vzGPVo8VkkdzxiFe4q9C25ktFhvuhX",
  "key12": "5Cb8dtvSgBKQGPhpmWSiGtpYxi7VDprK8kHAJDjXoxh9UvZw428tnH1f2QZ5ZDSMpcKCh59rgcRt6HrKtBcEUhA1",
  "key13": "TrfLXMYmXTo6WFnfQUGr7BgBJjZZFg9o2swrjnNVhoJ2dj6UXmUh8kuKLXFMPX1kUTR9sWBiKM94jsQpoQFvPDR",
  "key14": "56P4dxicyiLto1fCVrwSW3NaN93XNJ4tVetJ6XfLXmpBCEZP7LCvfP67Wvsj7Z6VQcEAdxVihno7Lk7P71ApcNPS",
  "key15": "2SMi3ci5u8HZinpTMtEgZufHgnGWU4fb2ZHiM8x8eXXEF3HZjRzf64tE9zuR7xzWusKnwnXmfJT6A5cse5vR7oNr",
  "key16": "N1ZxHhQBnBWDpN2J9Scp8zuNZo9qBzriq3K543aGfnz28wRi9ujspPmVeihdRQPp421RXFDfVvW6jpxjMCwidUc",
  "key17": "3WdxLg2XzmYFt6fechkCjXYzs8s61p9EyxvsJoCPBg7bKGndgLQqMA8UjTq48Lu1ChaSJrxEa5dwe8LUXPqWgpT3",
  "key18": "5pi9YjrH9tJXqtkprNoYMbEEABGojbGFFQxAWjh3pkUdWDVyrJhD1DvzFsuULNMGXCnCSHbjXAA6WwfRrHFPeQBW",
  "key19": "3JozHNTfNcegnVsa8f3Qx8bWHanffJQq9dgCvCQc5vSs3sUggqeTMJMfgZEVCSHqrVS4TF6UFouaacZBWUS7pPSe",
  "key20": "3woQenh1DeBz6E56DHsDnt69xZ3Eb8YvGtaEQyj8ppA5SLH6RAm5qdnxqRW6uh9Udu8muuoGHUXHAndvC8bQyBdP",
  "key21": "d3zHrvfGvoxvF7Yks43MDqy4tTvRcRHbJk6MWiuj3V5BGwUU3x2fVgr51W55J2BtbuZDJwunWX4zX3yhDZZEstC",
  "key22": "3eWTP5vax23KTkaWMPMJSGt3v8hxCqDzfH6gmxbYEzKRv6HMQWQu9gp2kdVU4V3dFXhYKWTNhS1oKyCEX8o7SAfy",
  "key23": "5Si7mzK4vr2GDNGSGHwR52K75hEX8aJWrPzpaZgQsQ1o9LX61qJ8LquUEFY2WZp35ShgmjRt4LEvkt7bXBAY3y1M",
  "key24": "3npUf2ntWAmEnrSpZWneacyXAhqeZuxiKHtLTku8KozHvfoAHKEi7fdD4kp3nbhUA3vF72hAmTWw63FeUAmrWRD5",
  "key25": "4LJMfuByk41kaQ4fMZngfxrMoBMcAB5QL2sCqEQMgvnpxmqrD2rcFTG7947Ks2GgMQ11gKFvYFBKrxt27Bv7TTew",
  "key26": "35v68rkkHxaiQjZyFoBueTApQQ9fK8kZvZn64rZ3MXMojz5nCMugUZpcUnUdYuALx9WpGrc6fEeuBFe2aGC3RPZw",
  "key27": "4ZKVjY6nvZPYrnWzSMSxLetuq9kkqfuhk3FZBBVzeJtu5LbdP9w6LwoLhsqRPPDfHARLfSYzz58vRmTdHoq1Vmuo",
  "key28": "2BV1BhmBktwDZFdZmJ1rVZNwYefdoQZ3AFTv8WgUVxvrz9kJbWUMgz5pNFYfbpjkmwzHnXtBs23ePqiNanfgJvQV",
  "key29": "kwZxVAduimjKbHoFTBoDABvhcrVqtNdiWM4uD1YaUK66WoHVHFm8M6X81cpDPGcZjvzJy6cdVDPNPcbTUTtHZqn",
  "key30": "272BGj4TRWND6GtNEZRUGm6u9pA7M8GwQe6up8ndDd5AtuRgw3rVYLU62Gsk87U5jLeYHeiTvR9yxkSzDrR3dPur",
  "key31": "bR67tq9LMmEeTe5WMAyCNLDmPCEV6rTpMYKfbirMaYPuMaHbhfk7EN8jZ61C7TxWEZYnp9bLaSEfh56vqFFtgEZ",
  "key32": "5YRMd525RjsHPPUuM6o8LM7zNBKwQev2f696V57V1E1MkqxE8T9kDNLpZhdZJzaBizAyw83SXqrqxrmVVVpykZ9Y",
  "key33": "jpsNuxRkd5dQPTm6oYFtL8Ss8RCj863KWg9PowYnFiBvAnNTQ69vYZyW5RW9ZtcPNwGzM8BCMdXnGNsiUpkEnqg",
  "key34": "642wPbyUUHB531p4xdUBb1z9WcvzH1SDPPw8pWBibmVPq2MUMuxxcdyrWF76pNoY5oCNZAbFTmYnakS1MYVDnK5c",
  "key35": "3k1B6Q9A4vE59yfeSgcb8zkQv2hhe9YWTQtofgjJbsWo4cycPDZP8utSWqVmrFQNg9xmXgDPBzZdC4Z5VRqaghEf",
  "key36": "5fSejNDDwXANeHjdpguqH27UDXsLT4qKnXNfS1NcNspxkM7eZorz6cDtmrQ8dHv7f5givB1YEADuKawUxgYi8JCZ",
  "key37": "4HeSuBxpV5LxyimKiA4maLrTYK2viGeJ3Jxnkcy9cKXYno899rsMxvTsBUtr6Z5Bs6u8kSzxeHcsmPtcyHT1Byyd",
  "key38": "4KJoweehfreRE9MCtbVPXGqQ2aPk9jmEPbhoYc13bS7niGiQodzqJvBHLmWucCzaTtoDNJm9rpWixbVkuMh6EiiQ",
  "key39": "43yaCtvHdbRh9jxqHNyYa5ckw5ekXVFB8qb1QkYmG8Hjjo3SPUAqqMtu44wDV8h349xz3y2dXy8sUGkW5GnjYDu9",
  "key40": "5wcbEC7Bu35uBY85cVsQHU2n3Hg7PFs2r99GF8eo3x8quLfgN31tk5xFT2LbB1gqm3RZrDYFDjMA3J4uKeBPWtEm",
  "key41": "24vkGQH54P5XCa8gAP4EgCUYZYWqxgKA9cwAqUJwwEAEH2f9idowKtdo22DH1eQL5ZGY6MfpAzdRVFYzYcTxYXwE",
  "key42": "3K4Qh8y93SWcbr1D9CF1PP2MoondBe8q62UifbjJdPgpuMzoxtHMmDH6C3ai6FSxNNzb9xGVeSSq2wbW7wmkTxBh",
  "key43": "64DzEybMGeUNxHpwWxMd5f6YXGenV8RWkbcK5KtFVjVrUk49dppW5YQsXVJHNiaLRF6SjxN4ixUZzu5EUu6Ymxy6",
  "key44": "2C3r78BcSxsReGCoBVRk9jwZyid4txCSkUbxmudQqUJ6FLffneMgenE2sQ7hWk7qsPoxPvNE8fRuFxsd3eukj7jz",
  "key45": "4VDddEpyJmd3bTPxu2EZ6VP8pDPF36xBYsntgs5bd5QEuwRt1Y1yZXdqPtvY8fSK5G2mkvHbwFVLTunQewDmdvpy",
  "key46": "4BCYwzoRLYztaQSxwJDzmYm1Vxs1572Tp3SGXLcvxL9hdr6RRrQUsqws8G6ZFdxESo4w5cuL1yenTNmnUHHwHJLY",
  "key47": "3fQcTwpsqGhMC53dmpkRzc3nNqRJtUyJkU8uDms4FRpRHYAMh74bi9tqpKo4UDjtvBjqiGEDgpeW9KFo8hXkfuuM"
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
