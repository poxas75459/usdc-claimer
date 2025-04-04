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
    "49tJsydbjLXfyvmzPzUXKVvzXLD9MWykB57N6eoVrkneSTJWAYhekgA4xawvk8ZGhz7WwBPVCqgpNtrDpxoWBrdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3sB47b9Aseks4J6VyP1DryzPctn7hSggXbytFGiDCsBTGW5YDkBHxPk6NQL1ChwwDDbRRQtNLrxjGuae6aQB57",
  "key1": "wNXHsGYQcrU251dNLCHw5XyUp7Tr9w6qv5FnEas6WaHYZBMAsHmNvD56nc3uNiySZA98Zx8Te8Ah2aKwRsj6hyS",
  "key2": "KdPSUwvm7AG8KmxHp4mwgqMFzP8KWNkyVMHNFYjfY1u4QzDsvJQc9WSBEnPENU16jyxcS3u4EQaurGEn4Wov8w1",
  "key3": "3C3s7rKtHc2AQQUNHTmn8YKHgoinVFpWHyZJzq2pkMAm8HDs9TRGjNkbREQt2qCavLBnTBuMPEKt64vahNnsW4Ve",
  "key4": "5rcYhrU1pss2G8UEWosxQ3YbhWPkPxmkn7B1JNARpajSBr4D9tES4jmWAUUjs8ipbWo21mKSACzgd6u8bb8wTG9S",
  "key5": "3YihGrJ8qWkxGaHZDPU7JysddftrWw1yo7HqPZ5g9KzJ24dXZgFQrjesLWi9GmRAyfMGo1T2PN8cgTNYUCSBieYK",
  "key6": "5gEiiDdHAopj2jNUb9LBuCGquo86f84zsdGEmEHcEYeNGU7RG8dyXRFunuWzV2EfcP3aGY66HmfhjU99yicMjA5n",
  "key7": "3DhaXNaq8kk4ATHKLGPdghCpAJCwAJUomFrCb7jmoDpDwHV8LNErSHVFJguFhxoKgcNb5E4gvT5sVkrx7GNA8Qw7",
  "key8": "4rCXAgZiGd2S2Cy3rFu6Xab5w5ijkqziXYdLAMb9MT8Z6qQKjK1BW73bdGuf8JGBYEtEqGxu5ZfyCJKda9EJg9hs",
  "key9": "3GCDYHpg6BUCVxAQpQqErWFRPyxTc8bvXaN2uzGab4Dh5H4oQjatWa2TFA4FADi89ffs1RALQw1vkp4A1VDdxPuA",
  "key10": "47JchSiyDLgfrKf2KhnTsJo35kHjCnFwZX27vyag7JbKKkQKH9nUwQZxMjYbqY5ho2c2sEYtuoSGLCejAmrUtCNS",
  "key11": "3vforE2vqwNBGiDr9W1mcSiw6XtyKDha1zECe2tbsgPhzbMuSrx2kwkViHdu7U1uodBmpfdvnGFvnqWBfbJta18k",
  "key12": "3wWSky9PjWsQDJvR4rLzZHkMoiokmCNFrhQVx9d7zU6qsbUn9U5TZUivZtwUCeZe7AdHpkmhSwqE5mmNnYkjGHMB",
  "key13": "4fr3SH5CuM9NRrALNva7EKwPxC8v3i1cxjg4TVyrc1VWvvHVb6YLv4cMjRLnFNw1WjDVsmi1NzHQKVXfUFYmnZeK",
  "key14": "jBkxpv7Bo99FgRYBovBNvjhHCKR8nEvb95DweATcAJdntExxktBzpNZuLHCk71ui47EGod39MyaZeqBXCQmiQPZ",
  "key15": "29hnEQ4N7F3JEiQqmVg5N6vvL4wneDejNWXk1Dq6fbHuevxB5ez2NwazzygARah1jXZMhTR71wdpRwyokXws4acC",
  "key16": "44EZYtMAPDDxfsaBhBzbb9FzunoM6qv7djwnqmQJe7wFumnkQqeRy87HYV5TS8rFcevNFSc1nHPHK2tvtyA9uBgY",
  "key17": "3yrdF3uQLkrc1RH5iaCaPiQrzkWX9xkKa4Fz3aa32GZUGkYiDtJdc1Jgi2duQegEM5N4W6QYdzhBDzZyk4Mk7w8m",
  "key18": "3SBLMQobgHTg4LYaQkcfa5wC4BtX4DMmaY58bUgWMs3UDS4Ksn4C5fiVZvCX7iNAB4sLB2n2gT972i1dhFgYfS7d",
  "key19": "3vS8LmT79N4oRzVLnAc3gr9bCaruBXHMeiAehWQSEPzWVEdxw4eJEnjuLY1EyaC9P8hNtWubZu2Vgm38XfJ53xdk",
  "key20": "4YHaHPWxu5sbNePYFjxFZkJjSadiRCK2ifN6WmEQ46qr3HUni4SggSzTgXH34VsmksCTmrBqj9LcvnaTRdFfGGas",
  "key21": "2EvnUBqvPbL72VzBB3KpH9yGYCYKvXLMuPXptVPZGbnXTVfYRvnR5zdixrcAXVqukw93Yt6EC8kwvYQP2S7ywQ67",
  "key22": "4ZsJ7xeaMyfQrdu5zQfzMb2s5LSs2eu4gno6Vkxs2Y8aPpXPy2p2UDSoZczH9T846WK5x7PBM41ToPS5wShyrUZx",
  "key23": "4rrqdMrndBCncBnPqdvqLb3TAhwnayGP5aGQQzPMrsmtZrxkcBJrFNu9wPU4gaEAm1qevuhGcf5pWK6i2nrt1Wq1",
  "key24": "5XYwqwAatb7BEnm3kXWbAokSHnVGJLF2tpMeda38Dq4zAnCMok9fyJwHcayTiXuVk5n8jgQyZnGk7hX2tL7LrfGC",
  "key25": "WP67vUgwghEgaJ18QaBgoHMFYAmQoMaSVhe3ZpK7WKpQ2Qz2FJMMrsqzSStEynwfZYmEspwh481zHfSmSTfq4gs",
  "key26": "5MEUGaW1YLdHqp7yP8nxpoqWJoECD4SLboAgW9vwPgpVcsgUBeoGaNqR9doxBdG5rvjiSNc62uCGPLUWr51iZZkP",
  "key27": "4eVqMNs3NRHEyrUpK84Rmz6vm8Kmn51EWzs9BnP8uJJzMawXUYrTXgXxPNgVswsPPUggEQVqNFoVgDGeu7oSVeuF",
  "key28": "4NxJASpZKyjCJgVKRxgK9h3hpZyrs8WR2tFHruqx24kugFAfk51pYkFX4ViZDazxNovRMK7eY2CZuRnuhFE6oCKW",
  "key29": "2TSsXPxoMf1Ny84XFrtrP5R5NFnPxBLzgu9L5b51291AVHb6KdiD3E3knewKHx8kMW6AcCgnMBRFyPmxfmCbeUTX",
  "key30": "261V5dcyeMYR3aq9e9Zsp1TyAqy6zjE1ci6t8CPAiyWTrK1TakfaMA8KsKcb9mcTcUqNvYixionKW4Aufq9P4tRZ",
  "key31": "1ey6qzEHF5qqJN64v81ApXGAm4Xh3YBp658W9SXLJx8zWD89k12bZ9yGhKnKB1T69Z3Gp9N9yTzcpdsShj3nW4K",
  "key32": "4ovbBZVoynZ2CqrvLAwx14j2L23478ZaeXgGYSnXfg84DmwS1FZADcD9p9L7EX2Wu5V2bsWNkZVCgdLgb6hkeLDC",
  "key33": "3XKudRv5BNFqa8wmLeaqckXNpSSki25j7e972kiaKUCrfBE5APfx4bNkAmjnKsYwMzGwmhWRnZFsA8ADfMyw7U32",
  "key34": "5wK71mdzXBWN1cLnKShpUF6oioUsWTRxtG7zQ4AqUZknwRG6we7m9rFRyWZcUcHdKQXbm3SGqKnzGUs1RpQJwRo8",
  "key35": "5wqMBt2oUVmUHV4G2oxUkRmZewCjZPpFNmDSomJ3ZaTq7Y2FSr89X3fxEvQMpBRhdSaFNxCdwsX9MfkAiXw9SLrp",
  "key36": "5MtooAYLu4MapFCB59iye3c6k7cSWZ63P27stGQQjpLER8WBMQp7uAfzYpgDJmsUMms4EqrxswnpYkmcyJjSeVyQ"
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
