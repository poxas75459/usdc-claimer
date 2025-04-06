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
    "5Qoc7Jg9L2GuxGZB6JJvWtN6Xeq7ZJQfaKVCi2BWakkJC6k9ue9NxNqJSZJZwyZMpy9EFdrcjxiypvUoGicN9V2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6xGyEBnWwdNSLtPh1QKxbBxzCedf3uKJYDJPGdoq6crjJ6zD7f2ZZANhwXJebXCtc3SN6UUu6yuXad6XDAQaAB",
  "key1": "29PAE8BJZJvk5e9BtDCsTx3P5uhbTNxtHSW79RvmoPzDUBYnDDDwi2sdM3SRLfpcofEx38XDVJ1mJrsbMN8cuD3D",
  "key2": "3hoq7wZuCiwe226syqYNmb1YYxHEVhMWSFGRG42iMWdr65NSahJJt9WsMYPZoAZuJpApy6KMNipR1MvUq7EueNP",
  "key3": "mz5g2EF1R36gULyyRNKNi89Jw51iHiqDzpbFjLDeDotaeqfXAa7FEtXFcxsuUhaWdRShf5ZTbjZeikgBR7nibu4",
  "key4": "24i3YuffM6g39x1FfBP5APAFJJhwuN3jadxBm2X57eM5P4irwvZPwExpX9hEmXJwT839hN1VsSEMeyXyxDZELW8Y",
  "key5": "2SfVN94gsG5Tn3jskLHKhNE8FJJP1AKm1bFEBPTqxnQy5qFRMZcAmP98RtXRS2H7oFoKhtMToxZbJwZJhiY5WdcM",
  "key6": "4nEffdux3YsnhGgS6zwbJnX68TmCxJGr1knWCBk514dLZn3q91Ri3eoLhkQ89tACzL7oKnHgohcSrVbeAqzTubqa",
  "key7": "3CVJRnA6zndxegvrR2ATRKjJZLfVsBqxsN5HWc4ehbp5JJFrrzvva3R7kM7twfBmT2edjHq9gyF3tTio3wuvR13C",
  "key8": "5C1jft238Z5PVwc5Rgdn8pNMF5Nkv5Du2ZDmmkVZi5SVUopsn9ToG4Mmrg97pVr2BNjbKhsjY7Yoz34F68bisXF1",
  "key9": "rBJeudmXZiBnkqJNo5UcDobhiSrKT1EktKYFe2RfKJTV294Qj99JJDV4kqctkYP1eGsDeTb9YmQmxjgYoBqzde5",
  "key10": "4MCwmsEYRqkQvE1nEyVVRQwqXmDtcfkQjxnAk8ave7wFVUnBF45Xi1QV1SCdoEXxSpD7SF1k3sQivMtvvZwCzhdE",
  "key11": "32JyXxozSzb9WDgJDQqCsbk85SbnK7FoGvqxrgDsamnxit9LQAwbPUomvZ5s8B5P7FC1G7R9UZiytZay7Y6HAnRT",
  "key12": "5S9L7xbbSjsJbjtSRc3QAJNjNHqCW38LVcX19A8qVdUq5scXngwu3yj4tKLmLteZjMRv97BsMkpSrZimXCBcHxmi",
  "key13": "34QB92R4Sgd4pogppm4X9FTAzGQuW9FUcz42nAYMqMCF2LN6A2V31fAQ5xfHnUyGNaFgpWpty5NjHpL6SnC2gQhK",
  "key14": "3PinxukPy7r43xD3E4s6xxfSpH3a9KtkEDC44wzGUo5SBbzmKswQ3NapiFGfzGpDhzMWpVKR8z8fukUWJHB8T46K",
  "key15": "3cLqaCabbbr7k6rH3ZLm2NmbEKNf8wb9MCLGCAnmewF6e9AxGgWC76UY5tZXyQYnvYyUaTDgTTEf9B1Eso2d3L3y",
  "key16": "5uG3a1YgzZd5nUth9ADJ1kjKUy1ox48vUhVp3dQqH9PvTD17yB4mV4N1LWBBR4gJ2YQgPXxkUMaeK69SHmuCYGPj",
  "key17": "2zwGJwBcMgf6rzrC9LhcHWEy5WHy54mVMofLnvgZxiHDdaz2jsuC2xhZAzpEqEVYiquBzQse6FMyJ55PH5sfMuzo",
  "key18": "515StaktXoKr92duZKsoEvS1MotZdRuW5hHK2Xkoz33j7CzqFNQpDfKogWpFmGctCYdUFtd1FPrU2f4yfcBEqCJ",
  "key19": "4EL8JYrF35G26343Egbn6pHVXibcy77Rq4MTS3qyPEaE8mXnb3f54gbd9KQFRtGqEN8dLLcSU4BDc19pE49TtbE3",
  "key20": "4iTd74gJbtAp7ZibfSC8TpPA9rgFdHfaiRwcpYtBopnFRz7LFdZqCJLnFyF8DTuvS5k9Z8TvrLmGRkityutiyxqQ",
  "key21": "2XofzuZVazLYLuKQqrdgNy4yWbJaLffaPP2h93wZ6TjcuHdQZxK8w4ZpDmnZjNocsq7UihrKMNtavqQNGRQVnqFK",
  "key22": "4x9dZwXkqb7rnhwLAdfETg6gq4U1g99GS8advumhfL383GZKBFWJHNmHBMWMyASwG8D3wLdPukBdURBc92guk14j",
  "key23": "2frZQeNKqhYcv3WNQAVmoTLJtR7kdmz3gibMTfnG1TBVG2Qs9cxP4usNERczfnk8L5XYWF7XyUcjZbBncaoAXshV",
  "key24": "noP8KNpA8GTqiAE8MFsfVq9TDAG3oYd7ymqzftTsGQ2aZGGZE8yJRdti5SGro2AUhDCKRKytRyZeuyN5eiuPG53",
  "key25": "3B4UxKGYrisqvsRe4XqimA1Y7Ab7T2mUfCdfowUR5nVUdEZ25C33GBJJLN46eSVvcNxmuxZYJgLYD6XX8YG5mMCd",
  "key26": "5sM85s77UBd7R6aSP8k8Ph87K3cr51M1D4zPePSUeJ6qGnzMz3jMn9F9h8stYoeqWFgnjKRyegbzU3UT5qdHwD6C",
  "key27": "9r5peaAWtExJ8ThTCiwms78oXbXdzEyixRqPABGuLztdPxwJ3jfYPWfr1GjSGRPCspwz8ZBoJ7BCrtrskLNhnGP",
  "key28": "2qGHMjj9C19GmHZfHLBXZtumM3ZsanwTEwg9DzhC3GypdpqYYXJmSE74kaFsZVQkxT5Apkr9Jz5hPqFHw2QdyDxR",
  "key29": "3bLRzVXMHJE97C5jdE6iRDV5ybuhoKUhxfjcoEgumwigjLz4aH1C1zmrMyvxPWyBqgnsb9YmCiLR1aUYEEQbS8TY",
  "key30": "2t1S6AydMYwsU73sw1hu43782Dm7m41an4C9o17C13m1Ap7Xy6kUddBjMycHxoryAcJAhVV5jq9GtDwmPxPr75Dz",
  "key31": "W2YUrfyUuPTRnSh8aDM6if9cYD5ayyjfe8AUbwQvbQo7zjBzxd7BDdypftemfc32yGYfvrKyjf3EJXP8gC3UW1y",
  "key32": "34vFk4kXqwK9bTKyrXD168GgWZjJAkArqWTjZoKJBKvoe7kToVXmCVjEntZ2rSMYp8dodzfiTSBWuzxST2Y6eria",
  "key33": "Hp9EscvTuMP5rq9TRybZbXSHhRjwVeq5GBBwYa5nKuEduVoKyGsGPgi4NTLW93bKMcJ6FsH9pGQyePHxfzGB2XE",
  "key34": "672WGPPL2GRz8MKsCttNedxbE5vf7FTLt1gRYk3BXLbfyY1iW3GEP27xZpNPfn952qAycAHtfTzLEAxJPGLZgmME",
  "key35": "22SGwqAfHm9PmhH7yZT1gWqVMgNp9RS5PQ5GfewVMpNASmi1eFsBQbDqHX9utdrmD9a2gqigm1hU2XmQvQPeEkpv",
  "key36": "qYArKD4Yu1KwN5LcrvB9XWAxTGVT5iuLsUEa7KkoeCFihXNgHqtCFje8Gp9jGJbMYMnKT3M4PYAY9ogCAAq8uT7",
  "key37": "3PqtDNELPcUbvHy3rVPed9GowsCziGR8NZ8sfWP8wvcD48xgY8yVB4q8q7gL72qi3q546rB5UBP43UooKwNenHQ2",
  "key38": "4qEKw7A5kxVYykCQBJaVyhp2SzMcZKeM1SmyCzo9r8dbJ2WWcJU6EHEKqnBSxG71xu1Bt2TU4w28ThnoBYr7mKQU",
  "key39": "RbdGPSryPTKR9vgXo9i7MsAKfkHooDNfaxDBWnkhAgD4wLGSdBbpdNNw6EubQ4mNFxfGeWcoYC5c8Hby9XefXCw",
  "key40": "3g96Bmh1VXw8K5hZBUiR3cyudxvafJexGChccS1j9PdH7v71n7XRaRu9QABDW4F37Fs325qvAMgMRCThbTnUFt7h",
  "key41": "2FYmXnWGne5Kzgdfd9FwxGm5Ji5xjG2BaBoofzfq5GBXPYn9eDUZapGjGYZGxmtw71NZRGVV6vi8ywfxeRzYhvEv",
  "key42": "5ntYLBW7U4WzptzXF2dajttDLbw7PdXJsCJjDVttNkPKMXnUzLKpKogifLEvopdYZGAN6TnHAH9T41udtWVJYT1S",
  "key43": "5DH9YE84uMg2mGB7VerMKSaCyikmy6GW1TiD4sJ5a4WcRmeQL6McXZC5SDwjVDGzVPRapKZWquDkR7w9Yav3K5j7",
  "key44": "24H69yU2ayo84GsPqHML2MoveYNRBLoPeYUDjDqzXHzour9s2tKWZ6xQtycdaszMxjrFWtGtH6fvKVSaLf3rdQAw",
  "key45": "2NufftVy8gqUUxZZhnSS4sBWHpCWf2ovdEXJNPkbSWQiNCRvfYA5mdJxSouHMvfVF7iZgfdiBpZSAmTJmeFjttcY",
  "key46": "kf5tmqLXGzfFgJmyjQWiVgW1oHdEekReVhg8BgUmcF7smqpV5yUkwagRrBwdt42MmWbq5MMyvr7q9ky61nLq6g6",
  "key47": "55o1RCsMRy4cHuBFoaGxBxdK5Ape7rUa2r87PkieLRhKumWjYxNjLUm2ca7rcZsjTrH6XZj8WHavuZHrtrZqgKtL",
  "key48": "4C8QbkKAi84ENVfU4woYcHT29hS3V4LjhrnwdA39gvsqqJGnxY945e5smpXhDw2KFBssUBWXiAVye9tQy9BsuGud"
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
