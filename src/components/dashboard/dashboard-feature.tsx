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
    "4FVKLarg64u9pamGwVCMyMNgg1MyWHjovcxYhqTUwSCyZWomYxMYsrjSkbUCc5PdzSc9vbGESjMCu6MTfUJBtzan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRkFEVaGruBtq56sn4ZtxXtMK3x2UkDnEwrytT6JuHJm6LSubFGLn7fJoW6kFRyadeEDgeVQchaJVV6pSVEYbE7",
  "key1": "3XCggBZzwEHYiTXQu8U2iSWKSVe2FzxRsNyY9fnH9Z9mCZXv6C4wiGT1Xpf2rjfxamzP1vcUkoaqGUJ7ha69EeiA",
  "key2": "5npynbBLjbdhNkQuiEzi9179MpL82ttHSmpzFzC7vinYLqoAuToq3Za19bhavmyNwiEazDAjBHtZ5phD889QkzTD",
  "key3": "6C8E8Fjv6Lx9iM9QybYQWbKmf24ZyepcouTW5d3vdQ56AX789Xxi6UhcrsoKb1jG9wviPUweMoVoCsojZ4ipUex",
  "key4": "AiZ1UVoundg6E7AobP9yZKuGUofsfFPfQnWcFKAW2hmSNAgh4ubcTBAcwhYJyn7Zr6fxmvjwArwo2HESqQAkR8n",
  "key5": "jAx7rd56iEELtYzeFvrpxcD8AcNvE3BUKweQ3QdA11EjuwgtYUSv9GSQ91pBV3F7y41JhKLXs6NQd1ycxTnxmnq",
  "key6": "22oD197vJGZxitfRibxfR4KhMbYvWvvV9fMShPgeLkM7TxJmnRYhjGW2UiXPLELRxCzfW3WhmQnF9zphSbajc4vJ",
  "key7": "2WJRwhYtLvSaEzaB2hNCUPJWUToJTAedYqRi9SW4BhALvqtow6FXHV3rU6sKNGwWhorVs9G43d8tpW49dJbaHoxr",
  "key8": "apYcbcwppFmTJgDgi2e3Yuo4e82bDowLqCfYVo5A9isxG2A4jgEv7sVSkApovn9NWqvQdxgJaGASH5HcUXZBcCk",
  "key9": "XEy5etCwwjTtFh2ADwTUy5cKPPVAmJx99jwRScC2BxJMvdUbaBZpJZEitXACAeqqXeWgudsCFPKkuxtYRx6hZBq",
  "key10": "3FfbVGk5Qw5VTCbr3hv62BFVnXdAkpdjXpVCP7cU8twHrYotETrJs5hJhwJKSkhcV6zyJ4RF2NmcSBAnSAyd4HAH",
  "key11": "49DJn4FM2rz5XkPFNuLRGT7KYpMKUwAfKPFwo6XWNVStwpZigk7mC8zoptzxTs5iFS62cqUsGqzHWqBzMk5pBCPJ",
  "key12": "73JgyMmNdw6dXiaJs4wKuh8AcKVnuVNher5Vk2XnUQ6uEeQL88HM3bsgayGdgz97dKDMb5rSYWfzGyeVYa7mKBY",
  "key13": "5wckMq9U4gBavmXmhPwSicDTVtSNSRNLNPGZmSw2uUXAqWVSPuVcHw3yebhVsxWCuXAh6xCz9J3UDcTAzYGLLcoH",
  "key14": "SBKS5eha3LHedQKB6zaE4tZ8cqNYHkRyKbRcCJ3smBVdoSAxYHgACtwQZdjo2X6UFyAQTxPRkahAVvbaxxgzPp8",
  "key15": "2hNNxLRTYtnBes2iFwKcTBnWg4tTVyp47pULQKDXNaU2tEHtw5iZcUMvoBB8g4LPuzUmHBbWst6nyariZzYhxzuC",
  "key16": "4fyKMpmyXEJDcaY8UUiidD37iW14icWZ853MPjZeSNh9P4PTcYG4iBT4gBr7F9XbpQVg7jtoCfdvpkzXT3F9S48s",
  "key17": "639uj6VyACYGkGHYozpe17FepVssVFgPj4WTetxRVHQ5k5B1Y3rY67D7sNDhZ5KqjNoRkkqdpLJEFGywDUyWkdPx",
  "key18": "uKEtVS6Bn3j8A8MDW1kG52jjdUF9e2mL54uiqckB94RGuFKcyr5mRdJHV5zQssRHkmGsL9d3y4rRFzJa3fUSL7p",
  "key19": "2De6rb3pDYH36dUfpuW6x9MZ2RDFffEjsjZ86xC1Y4vLpx6vqExL667amhUfidmVEws57P1o3CxeW1CK2a1xT88n",
  "key20": "5Mi171q5PdnZAF9vH52vgdxhjMSbU1Bf1eMiKS2ppguVKZhkYnPwe1yY31inYduBPHGSFNFSkVPf3d9Uw8tLvKh8",
  "key21": "eepEwFvR4JkYTQdGkm2JTNwUAgEAy65SGyYZLbrmRUtSmqdGoNiYSdUC3zHjFe51oyf4fy2VXjuaffUTuvFwuUQ",
  "key22": "dBzHPiCEfzFUuHwymiQeoZqwSHUKLppgGf8WMthchNiPMkfm3PgtXMeMLPqdVCLmfukm1ACPXi6SPjFBKa25WRs",
  "key23": "2CiNuGsfaKRNpYbaGnuf4owTvE9DGqxRk8fGqUsJvN79oQhVJSQ3VGUuwnwbv73goFnKEEYAddAYbne4oZXMQot7",
  "key24": "AXzfxSRUfP1YG8rPxvu7XZZneEX2Pc9fNDud2hzVnJ7YusnKk6EMdLDAbm5eGetCW1mkPxHMABoqwwexdFP51gx",
  "key25": "3cuEgj7cvjpkSJsEuVVAst8APs3MNhC9wj1jEDDkV9B2cserMne1fDooNiCx1hmzqYC64ifdrd7t8yijttVzbjx3",
  "key26": "67fW1UebfDbJvfq7QWMF9GnkT6LGqAMrTcmCLRijtDwuMP5B3LtTKCYyLEbCLF7qLtQDBbZ3oCjNRvV7yVk6WFxs",
  "key27": "6538wrTDJESzmuFpXFQQwmrUhv7LraXFLMezZUp5VjPC8KhA7AZGGRtbGKVDe4DH8mCfQDeCWAj8sF9romaSUi8V",
  "key28": "5joWgoUovFC1ysqovGapyH4ZcPcpEvbgo3m97nCsRkBE3qD1QyBy9yiAeHN8yxrNWoSBDcPxQyPsQhWcicaLew1H",
  "key29": "fKQtsPTgfkbTpyDDnt6cHJTqKN5tFXmL7cXujo3zTSWz9hDux5nN8FGox8JmgKJRhNAMqieKrnQzG1oc2mTctW7"
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
