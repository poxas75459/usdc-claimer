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
    "3HyxbV9LCUjH6bKuTE5Ve4BgoydrxQXw8URkHhWwfhdZwVT4YPWGZuKBEgp3Dkw1V5EsjdSV3FNPShBK1tmhSnWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FS1DCCgNHfgf2xxYQDRxRLVgnTKKxLaSNpCDHuWz4JZYJrf4BRiqEDCg5FGAwPtnCRLLyeTeFzwpoyqDpjAFzjK",
  "key1": "5DshaQBQe18HH5yUDrwg6MKGrWuQyvdSqdfVARcmcuYdcKmd3jijw4udHQhDmZs1gMV7o9c89X4XyS4Uk3dPnQ1n",
  "key2": "3Aqz13ewj8PTYE3Cf5h28qEpDfrJs485TR7TJ8oR5V6MRJQLLXG4jYHvPPt6fDLHPmLiyZyxjWUo3An8Ue59A8GJ",
  "key3": "4WZDLLQwyQ5E8Ecc8ePLynVBM7aqFg18FB9uYpEQWq3QCwxm4BVPQrcp9rKe1UhsWDmnpJEM332kuv7edRCd9wMb",
  "key4": "33Tjc2dab99v5BdvgNubByPetVhmHRSR5GNY9zGfdyqpgTVoYEjeW4QnYGZiWsr4xVMN9VeimNbvnA4QHax7HWvE",
  "key5": "MVNguNukqh2etuennQkGYZoHnyYNHAwpTGD9WXjgLwm78TKg6WXT1Xpj8KDS848GxVZx9i89efZzCSsPPnWVaFh",
  "key6": "2jChbwSVbmBNMh54STSwxh2QuaX3Cca8pNroNtocjhweaFJGPRL4bWFVBMMpEbaqVDsYZpCFEdNmnq7VN25RBkuP",
  "key7": "38nS7kurvV58ZR3kvkKmqJwcuiWWc4U6F6n7gp5o6ZkN5qqWh7kLiAgiWNak9YynhfaqTVKSEPKp4bVYCAKQQ6yp",
  "key8": "51zprAkAnLDgDEqV6um16QCqo8SphEFGgKhEg7eZW8y3Bp3axLn1jTGWq5nk3rQyf1rde5NNHDK6Yx8HufMiN1hu",
  "key9": "2VQ6kGAsFRAGRM6DPgZyeHdYnhAP2BQSePk5iUzqdeJNw4aYy7TgczVKNSk72wwgEQzDnHnm5YfUH7pe3q83TGrD",
  "key10": "3LZdGAxBCcQESF4omfmCBE2FTAfrVbGANRdrrJbDQYME5P5BcWJGqx9pokm9YL5S4Mcv46633hj52JrFp4tYRSY6",
  "key11": "bew2Xo9fr2KFr7GgTvmcJEWmbsc5hsEN3ggkk1gJmRWkBpnQJmSV154RdY8YwTGMELSmq4k1ZshGHXcs45sUqkB",
  "key12": "3Y5xe3KmDkjQfxGAsbwzVL49L4sp3CJ9JLsvATdA82CCsqFJFMkxgSaYQoYwyWiHgiACazPM8ZH2bNHwZPs3Sa5G",
  "key13": "5MERpnHDWBvNwxYUEbrPcDtLWSp2udVpacSnW4F4wWQT14GfDiL3qXakWKWm3gY4P1X7proqftr3vugj5GcmZVcA",
  "key14": "c5RgCJznuSW5bEcvH6tYjBbQvo7VDjSU1RZC8fVkDTtg3oMKoECYWUiTnYq8TnevbphQDJ1JYmgBBCj5FEH2W7E",
  "key15": "2snhSfMCRitpy4HGaWG6Yj8QwoT8SsFww7c23E5k7do6HHfoswopTsDbujnQpNggjtjBc1eW2o1DsgR9WnfCPkZh",
  "key16": "2evR4BGNw8LGsDB2GSU8XTyqR5LvzegV8RnrDCC2Y6jqyFNiCyzY4nmPDy7p1y6B8Hj3HVfQ1rsRPXuq24Z1GgN6",
  "key17": "3UV4hrnHeYnEBwyDgaBfzwbuaDGD3qfhLQJXj3Fn5GAZ6QYywLib1PRZLaNJwu1WxGfkXbAmh6SwHL44jgggKgmC",
  "key18": "65M1zMALnn7VJFPX2eNeon3mj5oJoAg3KjiRMfpDqyihjRH1C3ga9PcwsofZFh28hDg1xFhyvCifzyUNiusrLASP",
  "key19": "z4uu4qZVCWVLao68DjLmGEuUsEw7HazWpbHdovBCQ2WX9iVDfBfzzTPLWQHKrvCXUKigUp6JcYUm12v2kHjFEgZ",
  "key20": "9wBEdmP3XTxLnfwzPTRmWZ3dW7P75JwV87S7AKn5LtBFFWMWP9X5Ty1gVa6ThjouqvShicVoocfKPKYiBHbNX4v",
  "key21": "66WyrfPkqzFrMZ23bZPcyTZVrWYPF7wCt3xDJrvQJ8cmZZP9tJ9oLSyWRYsTocEUTBUw4YzRk5RWMvgQh4azHJdo",
  "key22": "3rSA3TirDKQjxD3EQDoimQjUkeh727eiMjMuX4mzZF3D79RfTirrrs8P6XFKtxWoBxkZ5RTXuJHnAgyWLMSUqQVQ",
  "key23": "3ZEmTrXfhYirQXyLvNsWWLuoRoqj8yNfzH7ZB85wx8XcXHhgmVhLuk8q1xBjbYXjCz3g4FBiNEbsjEG8G742dhXw",
  "key24": "2DzsP4cLuwjxziKBYw1HNBdMi7znHosuAn7rya7KDmK67RYvhdG6qkDyqLujHdmCV5buocB6PoumcBkXrvyfDQzg"
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
