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
    "2SxDdqgAKrGgfg8Yq2EgCYpq7PHS5TmayJU8iexV6jiYiWur1wtzBx9SmcWsVX6wcpYsXxZquRbUarXPqtv3vb6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xfgXa4DnP6j2BYPC3xpzDNWBciZ2XjxXx66yAsNwdqhNYyHXD38zH4fSFSzPyx43UffnBvH7x2cFek5dWmatMQx",
  "key1": "42HwsCncP8mhP1jSerX9obotnk5ag29ZY5VCxJGV7hj8zwkcryJRMUavP8LVm5MV7DXcZKSXPviGk7mW6KSb3f7n",
  "key2": "38JKmZSWL3gi8zdt6nt4qnyivSC2TRSA9HkSA4Vt12GsySjhh4Mg5goqXBo1L4gV4ddMqsssTmVbXu7vG1E1wMia",
  "key3": "4nDafxbi73MmT2f8Qw9pMrrX9BdDkk5W5jgdYrSxUf9FfvmkRK3AX8zK2GhavLXKteVY3XjrbMd3UbAPbY3mrjDN",
  "key4": "2owbW1LsxajaNjyRhzFd37rtrDqZibQDEVuhVSYsx3oXkdbjF9LUkWmqkT6DNeoVXU2i5qEN6aFdgs7FYSqYbHKc",
  "key5": "5qEVwVHkEWcputsPirGboYo8WyShypmiPyMNzC3wgLQchuMxR5tgwGb2t9gkpc2GHLeNNS9qCxd38WoRCDy2WU2m",
  "key6": "2bFStqCCuxDjaX5Q9BhsEkUeBsL5CNoUTLWXd8vZPKxXCi5xwcFvdUn9vaKwDfmWBho26ioSTgXGaqjZXAVB2ANZ",
  "key7": "5WcFsVyAWvuxdJpdtHPeYpoZkYy8Yu89jiSkRR38ug5Dv45TDVGzoqwEnwoGGkVkeN3qY16dRByr4W8zC8SjRPjX",
  "key8": "FiHY1q22km9JPMnVfrWSBotVMXKHWG8R7f258WcYaU89DPizCKMxhJjJ2yCDoYdTgwjac8P2C4xsw89JmCDjgyd",
  "key9": "4eRzXMRCuWKQgvjutefj8rwD1w7brhibEXkHBby19K7BRGpFvvfu8864JBVejtamAm47Mckv9nNWF2vYAfzoq7TF",
  "key10": "3ofwLwRuLWdhsK8soyuXBWzCLjLQyLA4pkpBQ6gynzJBNEQeBaovhPBy4tHJTKNqhcYmaeV9L3dGtd8FMsPzEjfw",
  "key11": "3ca8TeMjHjNn3526CNdnNtVMCL3aC4MZwrmnQhEWJdQMX6k58qN7d5zL8HKZNBafPvkAmG3MAUbYXDGt7i6AQSvx",
  "key12": "jkFTuE2ucvGsdUvzHFGAHCLi6qbffq1HzGzEs7TJjo6Tg3PmwhjiVSberJU4MRKTszDAufqiY3m9St7fbcJgwo8",
  "key13": "BPU2MtTRRLagLieUQ4Fr56io9S4DFhgrkcmgUFHVjrHFqCTJhEH1xPsqkhv72FN56Do1qqHNgvPEoKZ9vF896Zu",
  "key14": "3PJ3cjtaAwMAVjvjuLmV7rfTnWvGCD4BSnDtDErERomQjBA1y1siB3vR9FikLzFofvbwRAbVGs5DLntuXDxnpdJE",
  "key15": "2mExwXyVF8T6xEfw498Z6BknGra1eNof9AtKeDgTSgGyPBJRc7wf9tmGL79U5vTdQJCxpv4ipgr3ZREJRffRY8KZ",
  "key16": "258sWudfbjw6jf9WFbii3MavV1KfcJHJ9FvWhKbR8SRfHeJPBXjgcJbgsoLG3yWbC3m7CwwCDgDN3KzbAfB6Co2s",
  "key17": "TXn4jz6zir3ZGVX5ims3qYX4ZEJiXGVkzagVFwdVP41HjHmCqdxQqhx6zDJWHDSq2UzxTzeahXNPqTWBv53pU4V",
  "key18": "2TFoMCRC72v3UrDw4m2RXmRV3urgPf7uAFHPcV14MGsxzdjAcWEwTfA4jZGfdzBXS3NxNPidkPWVMrrRvYLVew6e",
  "key19": "5UtQjUSmmEhFmrz2HCRXM1RP9BbeVkvJb87gJje2cymY99HHmLFWqUHmpB92wrguAQLYaJQbYf6voQU6qyusk2e",
  "key20": "5M5y964Cixt5jaDqu5yski3J3QUvasBX5xoftreEVNyfwkqfg3sJr1E5Fs1xBHW1VpWMGVmYpE9TCkWsEjJ2Lkta",
  "key21": "2iXWf7fzsmzepC4RQnWfyJjPs6Zud4rMym6ZTN6YMSTrgMbPeiNSkU18rc6ic3Uvtywhh3pVQC7qSgrcuns82i3P",
  "key22": "4FXE6WDF9XstKuJnLpGmvW5mBr9VtYhi2QLm35EFdwFeiksLqJf4RSp97BEiAjWXPC26xshPyRBTR4e8nN69fRyQ",
  "key23": "5ab8BUZXrpbr2rhnDSPiufytt2FEM51bFmU3Eo73CBFAY2NGpoUK9gKGW2sHJtyu1ETmnTM54HcQdK1SL6NwZfHH",
  "key24": "5AMhiBnonm9g2B4qeHYWt4pGa5mW4YnXPU4poPn3NukHeYYGCPD2whNnQeWKnKy1uPHCya47gB9Zj3dAHFtUNsBg",
  "key25": "4FXgJ5c3MrPy2Km1Yczo3rFDB3rAugV9BFZCEdP7197rLGtarFATF1R4JpaPrS2j9i2mRHai5Y1dJifCmA7H33bC",
  "key26": "4S323MQiCRYnFLc8zCHsriUnW3uNBsX58ki9tPNt2GKv5ZSXYPjC1dYRJ97WRQPCna9pTpvjFSCroTzUz8stoqyX",
  "key27": "xdMRcV4oM6CoMZqZnqeDwpDxJhoeWc73bP8Dzjt3izAZ6MV4fJELYMotC7NkDhFTzLom3fjVS7xZwERmPKMQeFQ",
  "key28": "gjWgzC2eZYNq5rgZnmKsNT3USwgombXhwUG4uqfBuRQhM8nRcpsF5m5bfa4PpHKYxFjnvhPMhjGq1vSbozuGi1m"
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
