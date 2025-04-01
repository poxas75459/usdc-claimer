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
    "2KsP44p14UqaF3KgUWRejNevbRcMsg9GHCDk2QhGQkqXTBvssjmyC57CDUhG297HTJXQSVdxG8DarUdKeDD9xa39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6xvdhwcmdMcnxkBNuGcy7tQXtYXCr2wEnTVWpj2fN8oD9wEgGPkcCawAAMKj62G3Az78xztw2GAB2P9AkPjx6i",
  "key1": "65mWdyG9ELHzFHZBXRG8AR8PQE37r6BDdmAnxCjgoBSkY1J5T2US6GebisEQvhi1JbNtmPYTC1yh9zjckkFZwNGL",
  "key2": "ZnC1mEQGCmquEYFxi25ShBKxUAuFHXeWVCbGjRFVeq3LNA1eGP3ZkgQXqRHHVgdU4SiEiUErA2CX7uvaSYiFWWD",
  "key3": "5xKCTrm9FM6iKTvwFTUmetFFAwyomqDXigMqdGrzJQiHTCtSA6jKEVPbXXxCjnjTQxAuHL9bhKCzZetjVVUB3cSQ",
  "key4": "4fR68PW2bAswuY8cPHxtv3NbwwxwHs3QMS77UuyD9Ut8qAcP9hVg27gmAsapVZhYEiGjLh1s9eZCNsJfGoUdhBLz",
  "key5": "2Su1m9gca5UPkbusMgZvvFhX5Qg2vUz4ZipFpeMY4AxnDUiKF1cPL1vsLqCp87SNBojRJvDJEEygU2FRh9S826LN",
  "key6": "5ocE2g3NRB979uhSn8kNA7aY9vc62ogUUh9LmbRVJwvg85J1URac6Fj3HUutcZjdfnaQxu9xSUGxvfSwaNv5ztAD",
  "key7": "4cedfYxabsaCBAePZyRQFbjyV4BwQgpXV7bmeCMVXJNFxxLLtSegL9CbG66WLh5Lr4QswuNevmgwQiKrKhXUnreB",
  "key8": "4fLKT5rDPCmiVkx9zUN7TkvvDixhKVoZraU8riY9aautxBiArrA1KPqWEZBMXgcHFEmHXaAPHBuUyKx1Eum28NRr",
  "key9": "2GEfmRXxhoNrcx1MYfcWGKQy4j9czYGfdNV7G8KBaVHJWCsNHM3JfDB4tBhLS3D8jo19V8X36L5S9NNK4M19t4fT",
  "key10": "4aB28YG3i5VUctw7TnMdavGbGkSpYsT1GnjWfP3STmGEi2WchGF48MqtAeoaaJWREsHeSFfEeV9hE7y7rExnoE1c",
  "key11": "4wGojAJovqE7riRtXtyrEgzMuMLQLqsUArDFUvRV6AqqPK92otLof4vW4eTr5xM9L68Ygh4xtC8yqWtaxdkA18mc",
  "key12": "353vjSd4Kp37Y8XsbNJYsaA12pb46DHnXNHMr22k4g6PudFgdEZViK8pdJUi8rPyKQAKJCCRemvt5PzCsHQCbeJ7",
  "key13": "5KdGW6esqQJsK2LNSKhkc8tEzgEXjvhEEptRZvmqPwZgvWQVTussUxFmEWjQLuz7eL7sQmVWVXkk1KJPkio1gvJM",
  "key14": "2Zejh73bxZQYGok1FSRM1e7Ho4qocXokgkef46seVCzrhpB7AGuntFanR3dgtkSY75fi7cYcRjV2oAhqts1q3ND1",
  "key15": "5v3VdTpBhXjx36AZiyfQHaoE2kbmaAhv2QRwi6eF9EwfoWw6fpcFfzphjBxCXG1KCVQy75xGo87dyXmRTh8CNiPw",
  "key16": "2Mw9DvJBQrAA66Vgo1sL645BDRi1phKKMTPRnxdTuXokhfNi58dNDWNqXjQcfZLbVZ4m3xFV7y4or9VdhwJSTdKv",
  "key17": "4VGDrMM6ACiCexQKyviSKUkjpTwGtUciPPW6botfhXiJwxQnfsPh4jRVnPDTDgMbSyibm5YePBmwz8HpJdvApxZk",
  "key18": "3vMvWnP4qMJynTrCuGGNJQxFDYVicEPj9SZTb7TPo48wN7zjrios6i4UaUdnfzSA6wcaqvTuCpomsPzrfw4cYEMT",
  "key19": "4HGFArqB3mahspRbupbXeHnjQJ22q9DUTLSdJ6XDBd1DeRR9FAfqAz13HgisSscrZyKDwNph3VjPTiQxmwwNS8UR",
  "key20": "46vfxaGzHApWHCBhwWHTnRsfAUYeJvXhC7C8gEMTFbZ6jCUqtmZuR4jxpLdH2DiD5oWXThaYccM788XGAnhD3SZu",
  "key21": "3K9zorg2zgYaSg4thsJUTwBXYboVr5ZjmZ4wDsFaHLA5hkpzPaaBEt7obtYVLrG4Y2rw33ACLFReS6U7LcXp7gZq",
  "key22": "49mvEVXQ8ns8zbihq2LdaEM3g2zDGZYkbRNZGowx6tJFQxUP6j6y8VsmGxUYCFF4FZpr7JVUt9wDRJEx428BtEaJ",
  "key23": "MCLdYzWsgtJ9BsWwxAaTZ1Yet4RuEwiD7RqEkQ61qx89Uimb7PfW8YKtvraTmHCTrcDJcH9joQfAbPBL3X8RzMd",
  "key24": "56NA3rBjmSG7RmfzZYjGq9tjTWmJXzp2VWTEustmH4cWfZBfkthXSkays5gw3yCveHj47oHsB5kpwx8dzdD47fTJ",
  "key25": "2aikB2H79EVoxmfEocJs1UyrW6r4FFvZvY5F5Qh7FoBXyZffJLENDAC7JturjKAQLnhmgsMnNdsBTin8gVgEsRZV",
  "key26": "4uLg5MToVxRZvmCaA9CD4RZx2R1EjRhoQBKbjGkzSrd5GCSoTgKsmv8ZAKm5Eg63hsGaiHQTF6W1hAaoV6bSAEDX",
  "key27": "gYcpuAobFRdo59jGkpPxZTNGmFh55z2oKoA7zeokvLdhCWwR779XQRuHgf8ESKSuh3nTUzq9CqH3sSvtqefcm61",
  "key28": "4EvSXhkzCvDgF7NJmTzVwXpH5ytEYBHCxd7augZoJgiBGTD9igwTmoP77G4B6onGeYJ4FNtw3uY1MoVVXNRXS3AL",
  "key29": "29VSWvjHUWeywr5nvo72vvES1ypfvN3Xz8JuHjoAX59WCdv9MpJwVqMrkzkvBeQWhCvzkGEMkRB7iq61vTQ7F82Y",
  "key30": "2EDqydNzpfEcSqmgEv8fAT8aK1EmmJ9JC4ZoYStthRn2f7fdVnFm9CH9cM3QCURWKjs9dU1UwBm4vHGk8GcfCZgf",
  "key31": "4oFUmhZjiUkUShCUBJCnXmJaGdCQagYCD42jDMiL4EbAzqA3SLBF9tD3QrBwBsxk4mCcNBKtuRXvBjP9emDtfC7c",
  "key32": "3nhrQuxCdWc91ggFqazZ9iwTY6pg2MDjJBfQ5xtEFtJ5G7ydh4W7M7Ero1Tc2zKmGJx17tWU8TnDimV2kLgxtvzp",
  "key33": "4wNeKJWb6TouW7v7rAQNsj6PmYwwEHTtMPfnb3X22iN7o9KDWgfMSAc5NSxzC85GrS9Ff3vyb3nWiE4urutxyPJ2",
  "key34": "4eyV6tyYGBAMuV6VC41HPFWndnZtg3uRAcPn5nSzqsqVk9gmQuJKPW5rwwda5KwRZGqKxb4eQ4864mzAUwvNSLqZ",
  "key35": "2PFh5fbFoPgAMGB6APV9J6E2K5WoSynp111c3us6yuA4fMEUJ2aWG5qg26b5ZgZYH7uYpes8FbXzmfuzUekcbG4q",
  "key36": "3pGSp3JuSTFvZQJuhCKygfjSuQVdxGRVDzRDA19vgLMBypVQ8jp9PYHa5y77Bt3PrKmypwdR6NWVGHEbnJinM6vN",
  "key37": "bnA5cj7B6w5pPCQFi9vwPsGtvQemcJeCamCkhPhKtv99AicdfpriS6AMTgFc6F51ZAyXBEtsjVoUoY5VoQWmi5S",
  "key38": "3NC7acksvvw3iCKBaEe4aW4tBDfJq4JBLC9emzs1GT11HXdEEpwwdqTW7cAQxTLb67s6CgG4XPJZBjvEPGyrLs8K",
  "key39": "2zERgPDtoay1aKWUGeU4CGJ6KRvbyMXcLs8PoAiCQU4i5uTQqmttdNRpaZW9e5i6nek3Y1uLs3nNj9cZsfoG9mud",
  "key40": "2uiTNd45JvDLVe2rvsc64FkeDKQL2LEdKYLAw4iMSsaTBFHBAj449eCxCiLpEhd3Zc1XhMCrHXcxNf4aLXSwTZ3n",
  "key41": "5htCbFdTb7f9y9bdeHKimoJBHmW6zzEUM5fKH1rZdeHDu5cH83NwcezTgKHfzRidzegfmk8MnB4xoDVJGNAD6zed",
  "key42": "2LkrkRviUqm1CEmgob7omXWttJmegb7HJPbvYXGE8A8LGHvepdpTFL8fb7bmQxHfrqgmgHWBSuZBCMeY62YXuv65"
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
