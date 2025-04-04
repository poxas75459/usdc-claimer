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
    "2J1eUNDUrssskYhVd8i2tQcnBkLWVkLNq77gYFgNhQhWWA8iYvcAhnjEuNBhytdFCA1trdnDUbB6zckU5BvEoJvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Y4rccTSqdDmjEM671aETAY5EaNoapDzoSyokubc29FW2HKXveQeQ84AdmQfKXgVHRXEW61R7xSUJMo2ipzxH8p",
  "key1": "4niGMNVg8txb8ZVsFQtxZwge23hoJ99DQcMMdYuGqGEntC3qAbKPLNNHs5CfwGZSMU8oxfHoeDWpzS1AVqczu2wM",
  "key2": "5rTPfHVD2oneQChAgVabxP3JBBdJUTaUbedaQhwQ5JKnChMXP6tTogPvCu4XYjBtDMirUUKeQS3Qa1XZfKcFMbZR",
  "key3": "287M6mhxNVVxoLVWfe3E3FuxEkAenRt6C1afUKvxvnsWfw82uUzoWVCvfMwCPsTnd9Fqq35UznhZSXdBo2jDa8qa",
  "key4": "63226uNFq5fZ53SVniSfcamXXAXpQSF2dKqizBA2iokdLXS3fHUvBNtCg3AZKvrv86JqEQpYEQuuHCdoAo3UoaT7",
  "key5": "569VNZ8dTqhs7VCgXC4jQBqSu3WzsFfSeBLhA2Cd4Tm9bDTGCKj63qZukxJZZhBo9U6wjyTyb228XN4J83sWdYrL",
  "key6": "5UmnffmMdMoUbXudDeHLLAFWAbZfzKaFaYoNrCmvb7TgAuGX8y59RkMT1X7qvb8vEMzUwrvaQjjAD6GKcKK2RhRS",
  "key7": "4SbSitMBGgHgo6Qjk71fiR8uhBTi4r7dks2rG2Bc8BNd8fhh7zJxfSg4R6LZgS3GnFYt2k4TM4PdbNGY4AWgZY6W",
  "key8": "3kFtp6aEFvvSotsSnVYY9J1tnytMPaug8ikf7gT49k9aSSkWqjfD9ZGs4HtBit3A54AZXEXmevJocs4vHGTkhyqq",
  "key9": "2MqCDXqEUV2VnbAqjNC9dESPxL1MBTN7QU9V8WR1d9otbBqNPbjYvr83jL5VMKFMsQC2aknuMdCAaVF3mr7CnyTN",
  "key10": "V2RGC7cbF4hkFLUav2vym1ALGHLE2R8rNGDSpz5XhXGdDRP4paXDa12Tyf27t74eitbpykx4CVdZfYm5kpUKp64",
  "key11": "3G5Z9qjv7me5LtPjnX8QefoSFY5Dezefirkx4Gw55RHrhR1dMhCJpr4Ep6wEMKiBdrBDq3EMjN6y9bj33o3SFXKu",
  "key12": "5YSJx6s8RmCkaan22TST2yyRnkkWXQC3GLuGxUtMGVKHSFr7PqVs683VRStmhPsmus7q5js1D9yra1w9zMS5PJwg",
  "key13": "3o7r8FLXgzXCZYAF3JRAduUN8gutrvrfhh9aDEtBJSBHzyz6JVw3uKwJXrnon1qVUa7YCMZE3eixo1VDFNR9fxqr",
  "key14": "pepx5KfG1YsMg1rLZHDCD5h4UE9j6m1weuUivPUdZPRF9PDrSfAM3RjJhYform8FT3dpPPLZFHM6LHa1fuuJW1L",
  "key15": "2Cu9fv9cTBaW5zyfsacKhZRkJ5pctBdqYwLcBnRzBDeDy22AuquskXZqHhN9vQCEBpkC9MZRvszqA38awjCQg1qi",
  "key16": "33wz2mk1bpJ24yaepMsTdE3ojbDef5NcGnhJA9WfFp72gmBsrsEkQ2cGBEhkGnUo82sKc9WQthdQXL2UHdZizfeU",
  "key17": "5AnXSDpNLJCq7yTn7rfDDC63W1esHMv7YhzAN63eHZ3uDUWVBSBvA9Yz7YyTWJNARrKP3qDE6BmDj9ZX9mrWQXEs",
  "key18": "67DLTBiA1JV148hNnCiMFBnCF88xujBawawejPe3cTAn3654QBJMvzC7PrJ31YYdP5wDSW8KYdXWdv3T3Hq8TLUJ",
  "key19": "5aWnW4S1pbxcJ13bU7DRA7K3rJnq6FwhJE1iRbSGveUhnvFnGEDA9Kkh449Q1zuw5BDgMYJccB377XDEznnwMLrh",
  "key20": "4HZZaQbaog1YfddcXPoodQuD4h3r5PwkUUG96ojkU4bcg78hKMbE4YmLE3se8oW2MjjivRpSiTrCzh8x5VWGmiHw",
  "key21": "4gt2TibiwdFZNstrrLS8QsVppBLWy5MKvQpnVePHQExwg6WuaCb4wNCnrLuKU9RaLNQ1doHYDhWAhE5XGV5Ggcto",
  "key22": "5uLoeVjsvPd554PosHwMBktCsXoDKCDqYUrS4JyNhhjN2Gq2tVaeFoR68UakXQXgfnFhYCACbARUEn5ES8fURxci",
  "key23": "3yagWDGQE2fMXHTSVpr6u5Gke79UdTeSeEFzxux9sQfTkDkP9HBPJ9hSmyBCHo6NPQRJmJx1FyYv2MUT8pyxb55p",
  "key24": "2rvmJJfFfsuD5oZHutFHN54cUTi39tZmdCGYXzXkHHMnty17yMW5z2NrnL9untwNvSF9wSenFmDnktvNgV4hvTZd",
  "key25": "2LtymxBEvsCBnfQ2LBdBgeGceJz7gNTF87zVhUPdWGKqdsHjJFcrCJLp1WrsgdHvcecLRGeLafuxkWVPWd5qXqow"
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
