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
    "3AKY87cT8cUEgLWm4N46ErFbf7mNpDybdHXvAhegSFew3hKdWXHUS4AjVLQLWdV7SVq71UVPd2CeCMRxF5kyejpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tSBTyoptYwvWqa7bZ3iRYDDTgmnKVSVagLKTNJDKGbyc9Ws4eNJTvGx5A3CSu6hu3hfS2TUX8CdUN1B1BYWFiXU",
  "key1": "jNcH3NkoDtVBc1YuwK3Kx5KkpXhATxoo86XHexo2AfPsQufUy53VVQ3h7ysh319ReoonKEmtTko1sFu78gY7Leh",
  "key2": "fk3pZLFGZ1Knhf9kPNoCzxUy5XNVPusGFeFAp17SHKL7QDqfJdryHVzp94HWVJmpxvfksRK6JjagCqjDxvcsToQ",
  "key3": "2P6L2vnREf5Qm73UDyjyi4iDCghtX8FYWWdf8At65ZctCnEqyk3EzxhFfXox9KBwGLmWCb5s8kBcApfFdxD4tY3m",
  "key4": "4NoBA3dZTWSsvn1zLbNu2D2NVbfLrZb8ctaBpJWABiJ7TuK5u34MrqJb8M5MW3mrN61eLwz8S5cVMNs3pDrQNJgd",
  "key5": "UBw8XPRXzuE6BJEsSw812Sdr61yFraxsQy6UacUz7mFLLDUnKbrxD3PhtnhToQT4f2D7J2AX7RbmNodMoAxZcF4",
  "key6": "MbzVUkfHPDo8PbvgzEqbUJdqyW8GZ5vvK626G4cJwPkURwkHeTwMyjcW1nDgQK4qxDjsngUxzkGzdvmS44SiTN7",
  "key7": "Yja7TZsPDD3DTRjwjnoV29WV1tpzJSqCbeBqQCqNDETqTSMCCqQATt8pU4sREz49ybVo6zndi6F7tTZA6LYFqQC",
  "key8": "w3L5DWyiQKeY8LYNxiYec48LqdXxWWbQ1xg77QJ8x8UyKoPmU7N81hvLNS5jtcjmEXVuyent5uFSKBC8pg4kxYW",
  "key9": "ejooZXaDPtQi7DrDHpwFh77EFgjVy6aSjQE61aVnX557vzQK3G85kAfLnceNxLu4VELYTkE1Xr2AwJovkRjdHRX",
  "key10": "5S3ETriSLYAc7vJjApjSWXe6uViZr18MD6ygdQt7MUQo3UU4ZKDi82w2HqFhnPMUHULGMHfUokjD7qe2mPSvZtr",
  "key11": "2D3BQ5j7L9jSi89AGPBSK9hqphPZj8cwXatYLkNGht5oD3CXMhcb4FRk2s4uASdYwMVm4zcWb8PZeGiEo9btMsg3",
  "key12": "63gMNe7bdoric3x91QKi4JQyqhCokFDrcAvWsw3oU1EXmiY5ZnMFe5urxmT3iGkvaLKQpLrUHrggrSsKvzMbMZBE",
  "key13": "3P6hNXRaoywQs3dxRvtMPDvmFWqWTBEFUNKK181M945BCofajsUTycGWoCzVSocWMkg5dUAMFkDABu4ndptbiiSK",
  "key14": "4RGcvTkSeNddmFQmtvvmgVqpM2wDc2FJpphPxMFg4FSc5emHZ5gTVPhHMvXFDTdaYBM2bxDnQvDz1WZZnKzY5mMS",
  "key15": "277rCL43chRLMPL8t9gkmQY6iVRfYLA1CQaMuSPTa2nbFDcNPk8r7yzkmfU59qYS87m9rLnwYp5B9LcKi1bM7E44",
  "key16": "623i5q7Cfksx7mjChrMrjExdethqmLAP6mrXqQRh2sBu9yoxbd5k1YDjF74SbAD5sCVAyjh2NY5wckYugCEJpwLi",
  "key17": "4gYcYinujKioZNQVVXMosWBY3uBWKpvevmJ7XBpxxsc85rAPTsYewV6XitPtvHxabu3Lco6sNC25mUTvAdaNR9hb",
  "key18": "4sCksb37Zi1tJD5Z6KHtKDFK1Az6dUtpVsnFD5CvBXFn7H67EW7KprYdzRXxGrSxo4ntvQc8Fz7ks6tFaqDNKn11",
  "key19": "2HNwJbSZwjji7hrsb88R5dB9B3JSonmLGp6eR1Pqa3fzy35HDQaqvdmKZD8f9zdqN7CiaFXDzcmqbShZifAykrws",
  "key20": "5xsuxKfGzi2mXFQvRdD1iM6RZqA3JA1egdjT5y8Mqv6AENDAPxhWrhodnwGyS9L4f8BF2xdL1eD1vEAFDpE1q6jU",
  "key21": "3NrqYbXmN3a8NJnA7ksU2c8i8NZ2n79rS2LA21rrZjbBFPrRHoV5j6did9eC13sAsrWErbgN9QjUamvJsQKp257c",
  "key22": "5n2ipiYXLTzxTcRZeuCjeFU3y5t8fTG9YqffUE9oSRiRZ6gfAsr9f1uopQNYG1kuY9BWoUDPetVZiCxEYutuFb1Q",
  "key23": "5ejvEyrooZ8ocubsN7ejubMxn8h6uSsVJi8bG9vDNuZA5KyAez9rQXwaZhmE5qnwuGi7UNjiRGt5hX7gWCnhYB3p",
  "key24": "3aRLLh3SDrupDwTBeJgNeUPV33tiEbpm6oda1o7PJ1fiDu3X1edMttdg3WsnWMAbXFFmqXpRgq6VBJDGsrj5EQk6",
  "key25": "4vzU63Y2Eud9Z19zjetAwivGiJnRrAkwwBqnaBgWeweiC17EBoYPAo88ad8TkSboC5fitiSTonRn5B6pvrngwtCv",
  "key26": "2PY1AuZS7oAM85qi9MkihhssfDRWXcpbqcPDuUeBpJV6nsTqUkiD5ECsoFYXgaUZce76X4b2FXeKJW7vrRYHcYvD",
  "key27": "2rEbeLb1zM9eUEN7MhH4iZ1fDoHR6V8EMyxfXCLYX2TY6MaQ4SrhiQ85YmaDbGCRTVvRzuxXoiFmnuGYTZAgEWAi",
  "key28": "3BdTDemSg3V8FuJv9KVGCPD7cfpvRiFkPw91gVWfXtMm3XNoQgWsWNT9ALbe8dCYHLQjbQxSVg6U2sgJHattRtYW",
  "key29": "5NuLxafvBm9GYmLkFEUTL5i7dTVzDg6uMEvV9d9yM9SpyZNPvYsRUDtKpkXDaSD6WQNKPZnkWboRp3ZnA76XMGUQ",
  "key30": "4UsntVpKBkoE8WFwHKycP89NxBkqPqxVPdFSBG9adzmgusPYvztubFnmxbx2hjRT74sjGrSzFrHs4bZnqE8tzZxp"
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
