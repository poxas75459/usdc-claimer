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
    "48n3VrnFgvwxdB3XUHTxdNTZ7ycZbWfuT1iq779NMPQPQWbzcHJio1GqVqbJVpqafh73GERWeKGGFH9EDk2zfEvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6RW4bf1ndadedzxzHzhhhdZSVQ4mPEJ86FNNQmBbHUpeoHVsSsBdng2S5jjXhbxNTEkMiyL9Z1x3LbvR3yARxH",
  "key1": "5PbhEjwvcQ9zSy4J2sfn94jq8VnJzyepTnnxsrQVoVTxPbVT8EpmsGrwcYyuFKK9QC4ZAaKn4NmRdUU2VZE4DnUt",
  "key2": "4LiGLTe7tTgP7ApXsoPz9mZurAMCZsVjNfxxxaqUPz4Fn7aacCjtCE1dTVeGEE5r5bwRtf4uPVcuQnT9VBGEZdfn",
  "key3": "441uM5m7kPncNC9FxmadxvE6qKVXUQEUHzEG5NfJn1MRhdzXKx3NvvZ7SbXucu9LizTi2tobksjo3TdWhkTtWaYj",
  "key4": "4xB4q7Ed3H4bGieZzzzWCksAD4oMvcXyQLgQQCq6mkZ7XdT6QPw7MxzSPwfVwLCZWqgaJgjD69x34wqi8CMn1Tut",
  "key5": "4B7vN66LPt4yLzgnUvBqWshkUzfgSLL8nr3VxBf5C9tdty7EjzVE8GATuT6yZoKMwXDd1rgwGPNizRsQYBStfAhD",
  "key6": "53r2UZJ23chFHYsMSr4eLoj5ETTW2BxQstCePmXMhyR88SuiQa7TbXqKa4H3GAj52sZKTB4XkSpHF3DD7AAeUUpy",
  "key7": "3nBtANCeECdqoL3XFLMvMhmdJoirVG42NXuaRzqtnCTPUuwvuv4TwPLS6vuWLbLaFCfjLSTn4dpVJWadYVm6WHKr",
  "key8": "37FBkCM3UhHdMCoZE3hNT5KZ3CVmksiY4YnETeh8tvXeTU27pWsYWS9g4eqvnarYCgVSUDD5U91ZGQ6NaRzP9sEs",
  "key9": "2LRE3sFKJXAFCXCDU9yS7SqN16YSrg8QzVMjpNTxojv3gx92ufk17jeb1ofpTieUofxb1ScWGGpjKxV8Ex8weyGb",
  "key10": "45EtgXxjHdYo7WrqYKXGxasbDWTUkTSMnv3PKS9B4Es7hbS8YaVDucCZ73XEDiioEePpY1DeJ3fMzwZZDXBuoVLb",
  "key11": "5z5gmQSrXNAZhuXcXT4cwEWAi7JkxvUe8TUGjBCASRqYwCfs3RoJKBzAoVLRRXd9h6gAt4qvuDnJ7jWC2fwq6bVg",
  "key12": "4ggGcNBhhdNAvLT3nCEM6q26xSjSfiG5im5HhKnPADZ8hqpy429hNoetTmbTDrzvNBaSPpYH3QL7ntwK4Dwo9zAv",
  "key13": "5ciiXjmSQFWqBdVjCnmcg2bi7sh7VpTdeYhd6cfzLCu7DisysTRU3SiPcKJBf5PcmyNzNRx9dUmqWyy4RNpk9oAH",
  "key14": "ypT5AwsXUCn187RmD3TrUMGqmksVGENTQ2kSKTGEWfUrsESCuGaqaZbLH5YfeQEKHYe6GzQfDXRpgbXQN1BpnGF",
  "key15": "5gaQvYi4X1XQCoCp5dRWLsZNXNMbjXGvBmkPjbdoNo7SzJJh2CvPbJ9vUDQGiRaJPv444jLXc6s9Ke9G1xA1XAYu",
  "key16": "4W6QBkb3qFmpvzaNyk7F7GyKWMbAEaM5xrcamrrBDsMrA1VaMYBx6qgKSaJk8z7PxwHEPbZoUVAxDb1VoNwAVY8G",
  "key17": "3AjSzHZGotu8AgsfrCwPYeoTnEgxxzXBtTN2T6pnmRoZfBiMontrCeEkQiZm5NLe7VcVJPrzWuraUMMV6uiNM4Qc",
  "key18": "4oqMBLLqcXEF9RYgSi2cCRnd4vANXBjV7dPGkgvtwH8WUbdK9FBr6rSHDXkSzLbcpx22eQZFT5z7mbXWQkt5uGYM",
  "key19": "4edV3BLYqK11wkWgm56NLgTmpT4gwwTLoB47EjjdGHLyQiFXp8pCvoSMpgWbq6p54koZtLehSAE9di8yPPeD1C3q",
  "key20": "3dhfbhuekxeLcc4iz1wxbs9HcYb3WJrsXpYcqjDdbadxWgFNJCEaDdvuFz1FjuJRTvDPB9DH7qtwJsBrt4hnbp9i",
  "key21": "5aChRBf9Kai2LECPWr8ysazAc6Y8EtMDEhEMVpboPUtJsz279cLawwGjnU8rXnCAnkkTHzeAUohJKJ9KE84NquCf",
  "key22": "3rEEoFsApS9i8w6aGVhSLjyncEf2HojUbC5ceZWs5MMEZ3SSV73MRFHYPHY8cduDvsq928BfSbZx8z7GQZVn6PEq",
  "key23": "639QchkaAFjUbwxa57meg2jzXUQCFoXdppnrQBxR8NocWKhDUQrNy3zApxnJPsDJP32h4wFCZL89umniVxCCU198",
  "key24": "3TjJm34WF1gU9vrfErRWVvkeVTrG1eZMk3PcjPKETnrnW2E457R5HaMadc2rg7AAbKwTmrt18gjymv5CTcFptwmB",
  "key25": "4uEtfQnpeixEXM5gKERFVf7wXeJ7tg1fKSMgtvyVg5FPefmzQj7Vtgv8X8ozimK5XpZvYCRSXJAY5KsXRvSXbPij"
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
