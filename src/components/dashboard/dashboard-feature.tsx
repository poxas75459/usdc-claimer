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
    "GZdEdrC1tCVMcLLjozKMjyHWs3rbkGAkJNfu3omzWYBg2Ee6QzW6akk6HvMtWFLxxo6ktVhLRasQSQmiPcLqKoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kT6QbQTruN3ZAYVKZ1j6TtaeStPjEWxYxkcScLhr2dYJexUKgrYQPEMvchTN8VVshYy1RRxVL8DAvib9pfwgBPi",
  "key1": "59ucCPwnU1fywUDwX4rqYAJ7AVmSLqczWy92GVmoXFJSsXmuZnTm8qTJHfijqMZMx9CtS2ERnD3iRGv2DEsTpjkT",
  "key2": "3DtSjaSYL7EoVZxQH1ExhjaCAmcNR9FpkCvogwWbf9EhWpog3Eq8EgaXYNUNKnaV5XXFyB2jZDvKgfs1LXHhfevD",
  "key3": "LZ3wzx2Wpgwm4z489Q21qpNpCky4ndxivRBmw26FG5ms8eqQ13vvyDnHgzErVCmkY8BmCgeDsrAYgNJyrGpBtWx",
  "key4": "2iEZb6mJjvvVugG5p3JfyR5QTFNM7PRDMYbFWoJdgidjbVjwG3gDXnSg8tHL8zU2Won3R6kZCWSdbVp2VGTaa3XP",
  "key5": "29cvFNN8TaGW6PnKghQeBE4svZB9e6sKCFwb4WPCyynuAuwLhGNkeSxh6De4pAAJAT1cvr6vz8PUy94UDtHP1j5A",
  "key6": "3Gq6iGKCEGpUzeFsWiJqCsDY3G61sBvSDnZKVKPqRcHyKQArdCQy29Zs32wkQqHEPtpEaksy57oRJekjCnUEzvhL",
  "key7": "3V438LrF15gUWZfho5QuJdqn8xztVfEK495kNRDFeqEubXB9MXAS3JWndd7Y9wMLua7BQgutqCAvEtLhUPGPyNUV",
  "key8": "2jAv4xxpWKmCPgo9b9e7m4WwxPMC7MhspB39REKactpy6oqqTm6FQcqMcjNTVmrdVfLvVbeXNgW1HTGBU934Cetv",
  "key9": "4TyPphVpXQ5sPRbX2mVtRQqVMWBCwZC8d6DF8fPBpTPzSUfoguf8YA4EcggEDEpVpFUtdSQ1bBoNknY2jvweH3q6",
  "key10": "YnQpNP7VbthQAzDCPL2rJMsVUn4h9vLf9ZMjeN7LXrC49F2WMUwyNGSkCoEdY6srhf9hqfxuo7u3udfLuGCHu9A",
  "key11": "56JMK2yUrxGSHjLYxqa1ytptWgqXYwNDm73ThpHJmSDDXMyzRJRLqtmCHSsvLuhfziiiYJeWsGSHGdaeVMe1CMnT",
  "key12": "25hdPJguSFQAYVBhWAbFdMF68wJiCxsbMSFrjtGaxgWrowot5N2UBdwPVPWW1MJncXyUBhMgQUoRgQdBpMc2HguY",
  "key13": "5v2Se73bFNeZECorDvNAuWqB4zvuyKhAeLtnLbzEPHLgb2HyoNxf1amzNw9RLSrFLSFrt5YbjiXeefu1vYw6Pypu",
  "key14": "2yQ4DahZcSks13dYtJiemDwrxgZCHXRzvTmNEnrvrXzbntgzDnX6BN9ZcVyAkiARMSCN9GxLPgwkNNwRvFc4qDo9",
  "key15": "Fnyt6zkZgxxuyyHBZBG6N5eAUHTouXDPfwzd7pc9QGCEtWzbHErfxcQXdJ9yw6VSU8EpXrEyQUnnApWrBKBSwzL",
  "key16": "3jG3CDM6CSZdMygwe2ja1jVKnQVCABED8w5EPVzDKWn2vmP1G3PEVGWu7Tb1bv4iNrT1zwWk2Kvo8Dneqd6oW3ia",
  "key17": "25aAeiDSWsumGwi8sqRRdQi1BEBzkc5QpnfwhUfzXLhd8UVj26XM3UL2MVeYvbDDesLNpXcLMTUZeKNRMXaA3vDX",
  "key18": "3nJRmnAjakqLR8grWvRiQULm3GL4miRbu3oKBQUErT1W6RPdmPutd4bfdjyZg3KotAXMhoebAuMSPWxfAmtRVV13",
  "key19": "2kHiuJNGfe8tzkus9E9zSNzVmj8pj8GWgWo6sVyLCLUvtUP7EPsgikek9kXRNDWicChCRZmm4j5ejAxCTzKutR2u",
  "key20": "5CBYMNxHFPagrMZPfbxGsoDDoJz8h4Ektdq9XWUFmG9fnNHB7MybttL5TLN6mr3w3VNFjewUasebAqLdD3BZop2x",
  "key21": "5hiCwpX5ErmK13A55JbCVerN3zXm7uLomuaXAKyVt9bAyLDAm2tUnZgvYoNbAJoKqj7oXDzcEsk9Low1yGP2hR17",
  "key22": "rt7CqMoGMJGZz1pzaVcXbUTQmL69qfqSEEeDxaYARr1JTGYPcjkdtNvtSEakQo1HwZvGHdPspSnYeJ8yn6TDbEY",
  "key23": "4U7K2zk4fqWGUvzw7oo9L4t5DdSui226Wt4Gcsgc22pd5oS3bYyUoPdmyHpGgZHqwLmxyNN6SMeNJgVJZPrbksCs",
  "key24": "2egBpFxFig1B72dXECusp6D7SfffXiE5YtR8ucPdbEdMihsHnRvqvdRypxkwCAbYvanRDtemXE2YUCJz7LFX4YQo",
  "key25": "82kgd1VxdUB1Sq4y4G1Lkd1YrnC41zF42Wv6iYZPMMAu6oRPmjRqvLG6dhta3gxxY5LxtyCXXamvScoLbqRiiTr",
  "key26": "4nxgwNqNDuriQBQVcGRHQ7RZccdH4oU9yHrVwhwVgjeFstwpYtjw9gHfd59ckDqxVjNeD9DSBUNQo3qjCnEtJAJu",
  "key27": "q1ysg2FEHPsL5eWi8bywSi168ntLCVTQskuSkzxyRee4vk2Ufa9NojvCuXxMaMZMk8kjSKmuTcnvXvxwAr26mB7",
  "key28": "48xrtQ74Re6LutJsm6kYjP27rERHY7cN42egfMm9S2sGDhf1BQELZAVi1crc36vLjMwxz4rjYpkKGixUfyizH6K"
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
