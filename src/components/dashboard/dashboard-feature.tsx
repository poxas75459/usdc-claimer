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
    "55GnBozpTiVGyKykwAMmzw3tPdd3RJcBFbNXu9ti1hjsNw3UxUZAoVkQzJZGrfBymD14LoQBufE1oW2VBsZcZWfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MaaxXSdNBdM1VpD5kg97trWqu3LHV2LwQizJ8ZMAQfEkvMYPQYjB3wowRogpK3nRurvTNkeVp7CR4y4pMyPBkak",
  "key1": "34VvFRL5Bz7f9tBRBhFR7V6c6FhbTKjYMvkUzmud9tz34ojruBcCsWpnBRjvs7RrnsPrLuyHH2WvDmcSpGfb9zFe",
  "key2": "2d7pyXz3Mm1sC11eX4FWm4BHozqKJCiXWYFjjth7smwyGojuv7FcyVqgVcEx5WorJbzh4cYxp3dcKZxdE1GdCoCD",
  "key3": "4WDbJatzre4PnPgRriUPBF77fFbHAcZsmpLA5nZMwyRCbXfxuMhgW7BB1VrTmEfXDXJzEzJHvcpr2tdfJ4dZWt6R",
  "key4": "u1LMiXKLv5h2n1xuamGiSu2Rw1iYtGGYK91huoGEWnexLpG7jMA5BXhNn25VqBAvbHLSXs8ZbTHL7DErdfR24qh",
  "key5": "2EYZdjg2dWwy67W1UFWkXYaZLnw5uyKGruaMZfGSwiKYgUPAG2FS7kTP9ogKYzTrirPnhu8f75rqF5NWBGbFPxn9",
  "key6": "64wixGjARaFiwQqXTfEWSZGzBDfwJuzzsFKU2tZ3qBQSTNDUFk47XbhL7Ggod68NtxPscA9YvoKnZ1J8bxXATNh",
  "key7": "4rVJUSM6BqQsZLhhGizncguw3RatL8YRqpjur4N1zk9FoPD75MxH6J5pDBL8hSJaFaC7YzJ5MzKqKcJiFCigPSJt",
  "key8": "5bkZvj4d719karsgZWeSHmdpZrGwNBeroDKGcL6jFAF7pABEXuKusLRMYdPkf9Co9mvRAY6mCcpLQ43WvcKc2e1T",
  "key9": "4YCZP1Lf3cz4u8Z2jgDv8nkwhT5ndQkmJ4NEPuFiTied11ZZcoan3gzDuj7A5LB7ZmNp1Lg7L3WSStpfEYMW5b7A",
  "key10": "3z1twhs2kMCMnByxGGp4qB5QEjjwHh4GZshF8L1MEoRvCwr3QiFC93KmXZa9diPtgdcWMEHdMf8giXqu25pQ8Mmi",
  "key11": "2yeEJoonp1EoHxn1xAuQoSMEx6gRLEqSA6e5veyNjDdGkqvGTjCNXTUiv8nfTTQ7PXq2PT6rmYE116XEK8phtui4",
  "key12": "4NW64xMbjFftVsr6SU1QZXTGTDE226cFmYxi8oC922tWXwPwizdqBipw4JE71x4CFkabxJTp9mGfu48oZyBwaugm",
  "key13": "2hbbJgf6JrkgHiN8RsR22AZqMPLCx2TSte7P1x3di1HQaHCRAz9PkTLYB6ULhoWhCaE1R8N5CQJR28DCTs5bBnQb",
  "key14": "2py2tb7LSgsX2J5YffUSY6oxJhMqnSy33rR5hyLSfxCZVoWXYHuNkGmqJfxMC6ysiqVnfqUkMASorSiEWUhvYVU7",
  "key15": "5nWsshjeUEa2Kv8voqwoHCKwoihqPf1GU55PWoArN67n2WuUAN4xbAVGhKNuJpsP96hL9GKk5epDS2GxzJBn84fo",
  "key16": "5RNEPJQ4mnigrPMwwWS8RmakBiiVjmPxjsnfvLv39kKskDgWGcBnzQ9VLBiXqwdLuTb6ipHgEqRD4PBaRKiUCCqB",
  "key17": "28DeToZWDT7xKRfXWHeJXZdzkVLWZMjqFZKu4LwNDb6aAaDRPtGVWZeMk3iXuaY4p9L6w2DXw84DQPCPN47T7WHk",
  "key18": "4fjjevxYVjCD62Uu2P1xxDYnD1qa8TpRh9NQX91WSpxSNEh6XxvNPjMv8RMFqXtGd3nsc4F9KDNc3aG445tN1R6h",
  "key19": "4VPiCecc83D2tV2tEvvk9Zta4rTNEcQX7MgSRaMxreRq9bh3HNWWroMexLF6AL2Cio382F7vPoWngT9ZCqskvGU8",
  "key20": "Ts1w2gSRp1BiLGodBJQWuh5q9oG1RaujQfCHPyGNUpzbfafR3SSS3FjUzki2rMK5wKmaedgXDUsE2PvMstbFJMb",
  "key21": "kn5SdJ18XW276nE2yYrRFGcCvd8Fr1FqxGFU4J6LbEWwbkqRqPbxxZmJiga4HVXiSXw38ABr1RDmPWWYeP2Q1x5",
  "key22": "5bFL2wBqxVuVdwEXF8rcdcCmntTUrQrwcfNp3y5ypXqBYbNMrxvKxbZVcVn9SuR8W4frRQuvdQAjCmf8DdhMibyn",
  "key23": "Xf5g6zSMneAssVwdfL7tAkK2jMJ1t6eShoCChR7TvBRFgDy5aDMsShgXLp5WZaPfVnnz4VY2YbvJDbhvZhfbFt7",
  "key24": "5refuUGv5bCMz4Cv2D3ZvmBFuysnnbFz57gbZJw2ij4vGMYrX3ABsFLPGc89QMoioRcrzpBZDBiBHhJ2jYcbFC7y"
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
