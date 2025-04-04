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
    "3BC9VMALwEiBJ6KyvGi7ozsnp2RKHMFjqbfX1znoGStHGgVRczXg3aCQrUv99Ka27LJB8GoKybAHYeQKUH5PUjer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRhM7WW9CLPfMEoUNZDF61SRTxAgK21YWKRpVFywta3YJnD5QZrKNX1VD5dszBFRfAfbsHPQehyyjTy6viT6ieD",
  "key1": "nvW8qAgqWR8nvifBNsJMymKE1iGiXoH5hgPTCd3fw88fEJFhG8LMBzx1cd2mAjE9qEohHRruTxASzCAHqZBR4Hu",
  "key2": "4jkiPAPvVdVFXJX3697JuxtC2iHAGQq5obnqoiq8miRV4FyCU5ZnE1GEyMnKisiAztifV6tyww2P2s9n61zvBTkj",
  "key3": "yTVbg3dK1He8xzZbtHcL1W3vCXUohcmnGzehpbJNNCb7aTswZ9428yYm2HRcvwJprbf46taeUiaTuyAcj6AdWML",
  "key4": "589KRh5JS3HRqey4ZDmpUYhVFs6PTWZcD45ex6c7mDyFWzCLvvSMrBPny5VjyewBeXhHSvqvJUA8WnKkgkEy1KXj",
  "key5": "616gDJG4X93zpmXL1NgHxNUsCWrkWr4nhyFBaUxFh949bVqjgo487ViwCJW5bMHMcptq9H7qtELFebJ5Lw1eriAo",
  "key6": "5oQkJFjn6Sm8FBxW9DKgAq8w3k8cvdUZz8iD7MssZdTUCq4tHq9uffZj39FQQhzJ5kDLMtr7r2Uw4vygX7F2QSuC",
  "key7": "SLPAKpBbEYjSSzBt4NgjXsrww54AsA7o9ufbovcxXeMZMwkki1ggkw1wxL5Q47YQ7Hhha6nVwGjzh2wv8RDYrom",
  "key8": "27CvCPyUtNFsC1wijrMX9JqxCP1bQaabKgRJQ4FnMkoETtu6ph9sSU9jBjeHXgTa3xKNMaVRon3chgQYJYRm19p7",
  "key9": "WksHpXQUtBkR8Bxta6bmajdLyWK5vCpTwyMH5RaEKdyofUXSit9gN9Y3eXVz4259C5dJjp3Q1juL9kbDA7oSP56",
  "key10": "39SajcigqYMzh13QutgWUj1hqczpq3bW7PiqmLpPPLsAYywPcpdpmz8MCuc8y2cBxtEoGNYEEfDTGq2ZtGzEP6X6",
  "key11": "4HoWW4uTg7XdCaKgtrFfR1dFs3HM5hycUpu4LS5TRrsksyjcrwVpwYEePCoJEEGf8SpKCoUcRsY6v9cdYfs8PCQS",
  "key12": "3LvV9AJ64DURFE5cd2eAarqzUkS6RFRQyu3gLCNTfDVpEjhSiJt4ocVDmGdgMNoCPxGcgj9pHcZPzjvURKUoDPXc",
  "key13": "3okF7H2A6iYW7ZzcstjbPgvCSJB5LLipk8bgcdxp9pUpVR1c9C13uUC2FXfJr5giYYR8FkgJ49gRr9qFA28vDGNi",
  "key14": "3XmjSfdbFJVv7LmvsdPtBURr6TdAZSMMvJCUMBPzZ4J4Ht4NMGbFHEJQvT64KicXLZfiMksN3HwGVmLBQBGjqb5Q",
  "key15": "66MwDmWH6yGFkyqbraxqqf9xAdvsot44B4GVFY7WdnLar4KVA3m9a79JaFnbJtPMKgc7dp1k7BKmLctFpVj7Mf1a",
  "key16": "4khMZMzJ7gSWAKj9Y8LcDB5CDh8eBG2V2QA32fP7g2Ci9oDeidpsXDgmQSt3LCgbCjUPFt2Ffy12ihzTs5QFkT2a",
  "key17": "3EkQTCLy8By6AMAjPT9TCVVPPfNgEEKFm6DaYrHhNBPgFNzSZcKCK6oFYoxDWWunwwqcuRuJssvsrY4TEDN8VmyL",
  "key18": "2Se76wGLeYGBDqYEWP1LYJAck1YLW56MvidQKun9Nc8dqGh6tW53cjs5LUW7knSJWDKqwLwgmAzScYAp3o5bT42A",
  "key19": "2wWw4Y3tPDpnTCgxPJRLHDqcsjWuGPzC4SjaMUFLzF2f6BphvuoTCWjkDWh4dBXajHNRtPD1ANPSxXKJdECZJ3c8",
  "key20": "2Ybh7oFEEysNu4QiJNmghmQNg3dYKeGgtVcciigfU3yUWUnouSPXCQS38F64A8K9eMWwPUkLrFVETpNKWoEP2CeP",
  "key21": "5wf1V27CY7Wd1SvXgJGpU73fYbhBdcjVkaHiMgyRo7278d3sqDiChZphk54AUV2WRc9zXFKwqgY3DztadTf2dHw6",
  "key22": "9vzcui6ESipti8bzKHS1yk8tk8KNWo1EwbTFt5axt9vH1au6hrhgjwmsBMsTkAwoxSt397n15MmWKjRWkn49fiz",
  "key23": "4FjtA2a69D89ojnfYtmMkuM7YdtsZ4PoRkE2HUdv8Bpr8MTKExZ51VAh7F6B7yf1H1fyxvps4iSb9Jq6ZVzBf1HB",
  "key24": "3VJed9Ct435AgiRf91ZcDN2MHxRmsxgi28PhQVt8TgebgrDxMHXSXAdUgBBrQ4P7NAwPQ9G4UWntoNkHNVoVerMY",
  "key25": "4CuxepJwqb7xmMmmRcc6uQxr67T9sjyBEpSdrbzvhixwDc26bRQyFas4BJe23V9xZikXidRN5E4tAsjdx6UsXDxD",
  "key26": "aan8Fbw3u9naLBs9wrRsurPtwvcVAeya4LYDTafSsQwdHErbMvrK97EHfVRFkEyhoCjaZ366LKRPVBvqUxh4EPj",
  "key27": "5NMdWqEnFpRPahAUdC1cwyNNymrr7zhKZRNM4rQcnmBskWUo8SBrqPKq9qyzvxonWWwzmUHPuUk6zSTbeEdYJTYi",
  "key28": "4r7R6LL1rpsgCN7WmEmyECoAUhNjMsiuFSfPnzS7nSYMbHQurkm4RQJxrjVirLWZUzx4A1ELVdnaEWYRkHYU5oaS",
  "key29": "4e6oUtxedVkCGoLP96K7WqyAryYvpD75qyeNjRQnuQBroJyJCMABTMPCED3AHS9fVGmGeb1EbPHmhhccGs6vbeWs",
  "key30": "29uSPLKdJsKZnqDX2Wrj6VgqDWvfu69Mn9WUZSLj7vshSxp8nLy6ijSeYND3TJtDPjMYQUbZVX3MuFrEzZF1aoKR",
  "key31": "5BL9x8E6K8RcFcqEaUquWBE958doCDqKrSLs83rfpPaHWuyirbqFmHk6HxcugP3NJMxutsVvj6GGJDQcjZwZFpb7",
  "key32": "63Ljq3tAyK49AV6aGVSeweAoqpPetKWkCTGTVXe5h1aJFT3nngme9qZ1NDjPPCRriM5QF5Nvvoa4DnEUBC7KYYUP",
  "key33": "2Lnv3C6NJVBdSThk38q3Pbq2KXRx88FDznHfncDVMkbpSLVS8hUUovWLEg5icD7SCcTaLH81kJABpigTmVGShaeM",
  "key34": "FMBNXFu6ZW17r1eBFQdTVKrVMFRp94cNCdvWRv1rSrjWyVLPTJCM1P511QKL9Gb6BbG2jQQW5d9W8SQNK2FvawR",
  "key35": "3ygyFwnBF5MqbErjVRkQq8YpjddJiKZ3aTFSUcjVDiy4ohxJ9KkaaoxAVzBY6r7KZjzcCAF1njr1zu9BrjYYVJFE",
  "key36": "2SB7AtEMJQWFG3qk1pEdewx3Sje4kkRwdu1CxMLw8q2UVjHYA3BcPbtn7ZNMboRiP8NXnWUpFVMS6oEHxhKCWqbb",
  "key37": "3z8sC39FzZrLV3CzzsvSxxUoTiWidjBTrA3ejJYb4zvRZHzNMh7JK3nttm4yAZs9WiGqJzwuzKw8u1i5ps7pYZh5",
  "key38": "wqZQzgw8Fk4t8f5nfSzza34MraTZLwfwgNvNsaBDcW3zybbucFTPcR1s7yhCHUarWb8iLrbQiPCSgtz4mnskpMW",
  "key39": "4Taza5SHaDD1hCuwoT37fRypabmLek3YumR1J5o9aeccRKLt8UtAo76ZJTaKxtQBYmx7VsHsPoofvtMEhHE4xw1D",
  "key40": "dxJZEUpfTAZCs6ZFNvAc96ACxD41LDekse9X42PgNRZcTS3yBxFsCgQpKbWUQWgR7juebGbk7JeCK5u8oCgB31r",
  "key41": "5aa7zJr9xykfD61DxLH1UdynTGQH4HjstwNELFh67eg5goJFNzWf4Ybh7SjNgoVaB5JDkSiW5CAVRfAucXEKp5ZC",
  "key42": "3aVPBXdmmXKZExQRZH8A8TGCzMS8tjnmF3fHf9rtnVQ5NAVjKdaTtoMxKYgRbpMFf4HQ6we9PAuEwpEG1oHvNMKx"
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
