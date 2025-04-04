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
    "5hUm7nsKeid6TrYD7KsbNge7YJVTZijVHqJQ4zg7od79UX1Lom1yCVgiGBZarmqtCPBXvR95AiF1bg5yYLBqU7dF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijWrqPEsvzcsFPbvPtKBuw76gBsyvegYuzCjwrpZty41in6LEPucP1Rqz8Anj1ocVEnCFKQ2GKieSxY3V8Zt6v2",
  "key1": "a2Ee55mnScAungFGeitqCWrvaUqhVCzgEJusW1g6MNDE1sPwwGUYxM8DaeMRth6rDMwxd2MPX6ADHV2A2EPPXaL",
  "key2": "2XSy8v5pQTX8ZqEtEDvRZbzrAbrC8y3NeBhfPNW6pT2QzimHNMfBZbuFjLoo6XERb21uUoaEm4CSSC194KCRNSkF",
  "key3": "6gxiNiJ7kK9AZiykoJ7yNcH7dJkmV1JrxSMsDNQs3eU3S5BAcs9GxF7ngB5RTZhXwQkEwSnojrPnbBi6P5Sjygm",
  "key4": "oK6NhDGjV6634cLkSABberYbd9BxqcghA7Dxdxa2NJRSVJDfwyjLpiGtBDxmHLsdPQJrcYbQYvV1AVZyB2Ce12X",
  "key5": "2ak3ceGRM1goF2m9b9HhzhfohPqMoNkfKDQJ17x827TZDbaUEzqtpx4MjnhwMZbeFKaNkMGVqNYYF1R8AVfo7qJm",
  "key6": "4uxryKW1bJYFdPHjHXSNjiNgbh6DKEVF8Ng4NvemFGJbYYBEc8nnjQh3ND935JZM6CegDDDtK3hbTiRuLnHtHj7P",
  "key7": "3ttyv2JzCwejYCGRe5ExEa3C2BcmMvsRLN2wciAEvUMkXB7EJ2c9dg2nuUsjN5uh2hzVF8fWZQpdBT5kcyKMPzFL",
  "key8": "3bgH9sewvT6Sxqc999zQudgpfEqPNBistka85J6eLXnsVTdkzSmg1tFLEujZw5WCqbUYXvQFecSnp7H2pfhrK7Rs",
  "key9": "2XRdXMYpYpLX7vAs5ogANfxaaUMut7p3J5tsQbx6UauvaiGQS7XkdSsCvXip8jywL4ucPjyLHPT24TfSS1RhGrrC",
  "key10": "4JRreBc8iV8uRS1y2CZi9NEEZkdygGCEcWcwNrEgaNSkCRYfC94oquhKNNeYXbj6iDb1nG5t1QBijVRtG3qSJamx",
  "key11": "3CEdFv7TBsGNBAz6CnBedXAuQAg7CH9j9qLiJxBRbqgiXnjcqc6WVr2FJihWEEMW17aSVMjWzZf2pjxXwFozABdW",
  "key12": "3dcps2S1Q4RckiJk99nCyqucURBWKzm7cE3BjHNw6MKrYrNNQy3qWaPLetoFTkQsXKPN9VPNwVK3EQMzMnqQMcki",
  "key13": "4mCZb8J9NQejrTFvc8Jyj6chXGDHMzgBaJLos5gc4sEYkoU7if66EuSBLfK2w7Rjt1R2oaFCWTrKFmxNvXg2fjV1",
  "key14": "3Znjkv7pWRDepBas5QcZzMNGVMttcLcAnGUcmo89JJoRXXG2ELdKBVXQJ9UNKnJR71ScbUj6bzarAnr9W5QTuj13",
  "key15": "4KsmnjFLiMuuMg9RhP3m89WZnTfUbWUWXmMVrria3SbVarEp2HRrjzUTSy89Se9Dbn56by8C44CQaL48TPLGCjKP",
  "key16": "4TtpR6tTgHYhXLTDpU7mamxN5ppMAuHmrLwqDsuqN6nHGG39EShbfNGaH5TxzJkdBbcZLwoU44Uk1z13TxFpPXfG",
  "key17": "5yrUZpdqvixrD4dzGqUzKsi7xvEUSR5J6ekGMetT57Nqwz575p1Si1Vb4DU1ykP2WFk8BXUYYQ3ExWGqRT452GAB",
  "key18": "5yyL1jQKN5zZkxsBjU6vPU2RPsgqwqdLFTTS2LWr4bTNqE1nAjRz8L6wzE8T16zcduDDykH98uc4tkZ4SZhtE9ns",
  "key19": "tQMiuD2xSHGXA55BVWNa11Dzf4SR6Ey4TtB2XsaYfLHhWrpvBEUVcUAvfQpq1SrieM2UHxt7Vfi9145uxbtvyG8",
  "key20": "4LrgQQGNUpnQz26P8ozGyGFKq1DcuuxFjQVZ6KvMS5oh47zjuHteV7Ae2vrWZj8eW3vYaCNS1uR6So9yWBBcKYJB",
  "key21": "5uaFi4sMSRhTweGeLdwm3dYtArjmBK2UAMCQVKxYVM3LnE4RC43t5tGh3m6ebDMKPZobEjSNAPkYkT4NkpGESpmZ",
  "key22": "5TD1f9Wa4hGAePwoMn9NBuccXnmH54MBsgHUmSS2apUYQmtMnJ7ssme9GzVscUk8ZXLtZCKWMVR6STTmPCTkw6cs",
  "key23": "5tVVHMPhMbz4zvc8KprcULdZiAsQYudpm3BUMU5ZiqwA8BbrkKwYQwxXu9HUUch6KaUV6hpQTyJwEuC2sARTB2eg",
  "key24": "5cCpi6GGwDw5Tfk8vZ6xQRhDV5Ww3xNaDnVvbRjoNrEoXN7aT3Bziq3pefqGcXKMzMVpXcTgohgd7j74zz3bFq8H",
  "key25": "28yJD5rYm6yhzsUcmP73QcZcbmRBdmT4GptjHxdyvgLgFQv7qzAst9WdcpfkHbG9YLghwvck5JMx8j3HyxnzrRbn",
  "key26": "4cPHBfue6rSTvV5aJNbBrWQP2oohJnQ8MfzPxDnh96CAfi4rntw3CsyjiiSukWV1E1h57AfewDtgGfpgWLuaadva",
  "key27": "3N7CGE43QvKhvVKdrA2EKZtB2bkToXkWQZMoVrAtqHcCbQPz7MZj5iJBz3D5zQnagMEdf1zzLjaQup26bVZTF9xc"
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
