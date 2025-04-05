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
    "4q2NA6zKNNcTgnxSSmJF1cPgJwSh89STq7fzuhgsyRE1HJH1JBUNj9aB5imHRYrDwZYZ1qnGs7HCoANVi8fkh1D5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UcwQUcVEb5JkwDESRoPXH7UdazyhfcUWR9JHamQKd3Gmw1LyXQfZnUVwJkAV6FmXqf79hC8RWSv5U4mq8RkmzvU",
  "key1": "5zfJgKCrh9Bufu1yueme8jVnNH8kos9Mru1sN5fK87UbjrgrNM6n3KNk91kYX2PeQo22f6TVXZocK3ukRjtfQQHA",
  "key2": "WryxyiEwB8Pp7h95t8eVdnSUSEQseGxJqv3U5ijwdZniMMEjamy5BnCqwQKL6M7ajLvzo266vL3v9KQuX5FE1Fm",
  "key3": "2B5oVKh6ZV8sKaN49YQ2bwmRVwPZ6sF49wiFSPAB7Zymx7aRVQ56jRFpNp6Mj3LNcG6Pp5Vf2qMuMbWy9VMgHaxS",
  "key4": "5KrAo6pF3spqPAKkk9nZ7G22kTNcX9fxTCmz8ETj14koyAAa4ThhNSQtzyBm8KJme2oaFeFXsyCWiSbDT46GFuXd",
  "key5": "54bpXuimrhXY4AWNf18947emKwz1v1EHqFqdRut42oP3LGTJBk9UF1LpcBWFhSKzsYXDzTe2rKae54CApAMvKd13",
  "key6": "3JzeVHW2h3goiQaxTiMajXHs2wRNbjrRH6hF2rYfrSGZ1D5UgNTvUz11cekCxVRo7UqoJsFU5whYqRqGDCjgxE7h",
  "key7": "42ypQFNSvvm1LLvXHRnNsAex9zvLEdLym6ygg6SRFYuPqR8zK2dhBLA84q9wvpjDr5685AZtbGt4bG9ehAAdcJw2",
  "key8": "21rwXWcxdzPM43CwkXWpqGvgamNj9Y7R1AxwfdsQhuSjn6C6r17UCq9HhtJW8qYuweTPb7Rk3h9FjcWUzxiUuea1",
  "key9": "5PUJuw7ioa7RekAJxxGVeFJL7yhvk1yCFkAkN8bBAQZZkPDM3CtVMBTj4rSTYBnbnMrLYbk7WWzKcT4Rp93D6vnw",
  "key10": "6458zmqVU2YdcHqiUrW3YsP14sNaUpVFFjY1dQnSrszrcpYpnhJZM3nTdrPAAfimkdGZp2NpeeivNgHnTX9kDe9d",
  "key11": "5Kqi2njC9oW8bMFdqmwSGpTgoCD4HMToHeH4gHLYBq7iToQNo53X5K9JXLursz5xKk6iL7QTusicu2rxCB7ziM3x",
  "key12": "4xkCQhqxdM8n41t3aKPtwN8wqFAp9q4mBrmYYkgwdoNtXADx9FDVcNMkZt8sht31rpbkZNXwuaQpEtLxC5S9Qa8A",
  "key13": "4D5Xwg7Bdggtn3RtF639pqio8dB8jjckBoT4AvsPKFgsUGXf2BWaozVCXL83ozCdxLL4YWzAjaF8VqSwGi82suQU",
  "key14": "2UsG2VwytVcxW4oy6FheaYeUtWScfEsVEBsazx6Q8nTZsSxQAahbcFyx1mDqbyXrVPzM9UQBF7bs51egozr8eyBE",
  "key15": "3rBUqvPwPsNJWw798pubTWwePd99p1oX4wNfn1an3DMCd7q7woUk81zfDNiUogFB3cJD2i4nCQs6Gq3mVFXhXfrr",
  "key16": "fjsqevAUvHf3LeWdQo9GPGzf4oEYzByRKRQtteXQBWsnomqhWF9yu5tRRH2p7AnCoHopEm6J79cYegaTDM5fiaU",
  "key17": "55aiYsSiutrviywuXDGpRzhiZedM41GZVEhqn3UoHcPEtFXQEg93kahcTZjHdoTykcLVRp9cf2Tbnyo1hDh558RW",
  "key18": "5AZZoujw2xLxwKfVYSp771xdfc8qDfG2CuWZPzotgEtrHgcxN9ynRtSieRanPkEZQF4UKBXTvDg6enh6c9F81uN8",
  "key19": "3K1tR3RmRMYZgEDMhChJrYGMUafcynNYACAC7CBcaQ5pLjN4ePDrFd76xSkYv8ZVAnW57WPezmRnfVJKA5w5F9NT",
  "key20": "5k2xYmGEBsw4oQxxcaJeeJMexawocRbt8K9p73Q98pE4hPr7mqZ7MYjsDkAGqdFNgjkeBm6epNRwEmhwJ1thFAKt",
  "key21": "4Li33h48A65AvFvgdJ77GFKyVZtSnSErfGJy6MDt1PAs9yNoe4W8vCfVm74FPWxWDvaQvMXXwLu1D46x9FMxWZco",
  "key22": "49ZRqbz1osp8WSVNhgg9ew2d6dVhbm1CidErahNkw7Rcj4Hrqh6eTVirnzoktxVYL65SUFUh6qckJmJrBbwBv2dk",
  "key23": "4bnBC27z59dGACfpAQLA52djKK89i31CyKmhcrh9SJsjBnqfohMA2dPb8tNe3HdnRyW5yzDW9rLoSxFeaNuwU5hf",
  "key24": "5jqx3DopBU6wj9MjZxikCFpjeMvAsfc5mFZ4zNiNa8w6Pg2vVXrmomtpNdYRt8mmp958xfNrVmgMymvygSdpVWD9",
  "key25": "8VByTzwxH14k1xJ5jNW3Y7TCpjcJdcSPx8rENu4jyKVqGdVwBKKmBZYJE1dCj97cy4CttB39YBBJH1S2Xkmoob7",
  "key26": "bBdCBN6hcWLrrCnpYUj8bLHeZfzNX8u4ghLZ7iURjJj2W7L5GuzQmUNPXq7Xw5GjQNsbE1Ewr7owZdzitK2vdtV",
  "key27": "31RnKjyyjP7sYLoSLFKX5XxexQuvG49kbMNLFSFUmxsb8uTgdEwuzZa15n2AKE4Ny8JTW5RKgrfFx5bWAT38HRmG",
  "key28": "4yamNkmoSyUMigidiJ945rXhvV7aQrD8SGZZua7GWFzN4YGQfoFKdjKPvMuekY5aWpqrxo8jf2twLQm7oT9oGbrN",
  "key29": "b4SarcB3QZGN91gHQDsHkHqvBftKV3rKzjH3Cp6m54vbGTjbS2kHyXFkHigSpx9qj2THp94ZCuxTPJ6MD6MFF1a",
  "key30": "49mWZN3ewfSUCGib8mCLQkWfh66CNajAHHRNhbe6MsSL6ZwiQSfV478AVzU88Ao6Fd1PnSysjymRc1oUsUbiZGYZ",
  "key31": "JwSQKt3Msu3cyKhSj6FzAtQ8PGcNkN9op6bD7fn3jQb73bwSuFtSWuBLdimSaTTt5Ka3mCzpZbd5gBWNve2st4S",
  "key32": "37nvLXjmCfBe881ZwPoPymJzxPStWc5E5FxLpdrv113LUi6hrMGBrxUgN5rihKvcDhfQdjPQLMye5mLLP8gdfw5c"
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
