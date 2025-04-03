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
    "5fChtieNiQQ4uJV2iaUm2N94ngi5sh2eUxhZiFbkkQGMAEdmmqnu9fQbQdgzMaVRxkQ3N4yvnKfdRNt1yD8okMLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zqz3EBoxj81Twk3DenbkdivatqRh6SVNEW3xZ5HmbMopqY6dB1RMAobuo2DgtxeE6NE5U9f3JFgXKBKfV1mqYbo",
  "key1": "34eRgJ2vDyvZxXX3jDxiuznH1k8Lsjmqp9xA62eWhdzi5qJUMd7UYMcZ4vKfw7fqP2RtdUTawpr6vmKAQDEV3mb9",
  "key2": "54LRVBvRWm8dLG68ptg82kXyVjNPPceguzyyvrHzW2aVHKYfzPKieL56WnR6CQGaAgAR1usmLMwMPSCZT3bbjVRe",
  "key3": "4inXQMHECeP5FMpV8Vj5k8eojZAnY3d7dFmq1dx6PuegtYnsGMCLZ8acYAL6fKrWmf2MDKdZPA5exVXknEoxJpMS",
  "key4": "5fkASWfuuTNqFuh7qhE6eWac9R73STZ9ZJNapyQFdR8CQqDniHH8iGugUojtmvfvBBmAcCfV5FywvVYSEd4kLfrH",
  "key5": "dnQawgv9saGtahivdEkbwQzrWi86iTrAqMDioHSXGp8WNyK9Kn6deL4PumAWDUFDsBCbRYSXFsMpBaGdYRJbXGu",
  "key6": "ConBG5FMeLBMX46TCdB4tqFCHZtyZTp7KBezbbinhxaYTUpYNsjdRfvM7KMpvANXyvbVJ6iPb5Mfh8iKeE4R9AA",
  "key7": "66eLV9goNXnAKBnGk9eY8UFaJLNN24VvhZk8vT4Kb33735du1LfXZAP1ZfPMgsdhCeZpQp9kECxs7VJnjWL8hFiz",
  "key8": "4Un7DwoFQijtw8HQehy6JnGw4C4RZGs69nWPEUcc2bpwv7ReBHZZ47QQuEvpaq7nR7EVecrz3HuRJ5XDj2BRnRcN",
  "key9": "2tByHaUEvMBpWopsuBzPPr5C1XXV61ftHzAzsED991GpXvP1ffGdFSdKHSjQtyB1Kja157XUs8wLtZSPr9CwU5Mu",
  "key10": "5pitgSGBvnV1JAJ8bkaMMGtCMXNDh7EWGmnk2iiprtvWKKTG1gm4EsoT4xmkgfoLpJ7LMmULM2CDS9hBiu7WHAZ1",
  "key11": "3k7s3DuGpMMxea7zXJnLNy33W5HSteTUoR4pF7d11ipyhgB97L4R8J8bDPNFxphVApR2Sxx79CwMdTvMnHnfS3ZX",
  "key12": "aBfCaSSKbXXzGAtm2q1myBJjSPt5SpixTViTGkXNWVxEx7GX6vVXtQLzfQmEspBDy2S5iDp6F2B6hEiFuK86t93",
  "key13": "5B96hTbu1EDQfqmhmK7vjCm1b25QH4U7KA5emVnW6iPcATDTzjBr8TeeZ5PZUgjd5qC9VcVPr2rTV43q9FATWNny",
  "key14": "3MwuVqgtdnhbMALPnTeSdXX1bdjNgdMQG73ZvuXex3mUgEXcFBdagShfj7be75d11cRDvo5jicZEGG3Y7yvZgcF6",
  "key15": "5pD9Y9s64wGxtHZWLJUEGYhJtoJDtJvRRNPpkZDvuJqwM4gkYCr3Sn9w8BLmLUmKDniJZeeekvDYUEeUz6BLG3To",
  "key16": "3kG11KWPVg66wsMtSZUbLUb7veLKqzbHAZi6uTdyzhdWDpM2JeEkXZ2qSZrdG6YW2jK4rW5AcJjJLq1VzT23St9v",
  "key17": "2WvyVAvenZ8iF1kVj32TQqibp5TVvGsmGk5EirwVCbBrgq8vwsQh327q9KoMfXSWZTmVgmkuU1L9tm6RUpZMEePX",
  "key18": "4rDv8USMw4KHUn2JW57rAqrACkdGZRMit79PbpU2qEQu8D3ABcJuEzY658ck2TV8pSyRQbnGs8N47AjwtXFbVPHz",
  "key19": "5TFykzBxzutFBxFNwKnjPomE1KQcc6gToE48tSNsYmcakGZNNHCJDd57VXhVftbW8Y8c7qSS3gRDehqBXLsUq8YS",
  "key20": "MpEom8f6yGknXMLLynPqd6ihcdqybPa8nGrZ7WxqmBfNURYozxCtfzmLmfviTjNuaWVnKo9MTQ8a3UcqWW8F5hn",
  "key21": "rJPf3xE2ZBpQeSo7HxnNF1uH5c3VwAbdxofuWQEoXAKKgfLCQNa81ppz7uJd3Qfect4o5SMmjw4CGS12xFBFcqY",
  "key22": "ELf4qp4od1gojfAsxwVXeEiYvLnva8FAahPWHGVEHRakF4ghD6J4m27r8PK5tmGgs7xS7x8hnSyxgb5L5Jxkdz1",
  "key23": "45zJQzTPkA5NkeEKAbssrCoNmBoUCaDh4XSPX7HiXUH8hrGVoQSo9GzTnCUXxBNpryTQWpbhma2EKsoAnnGeLAUq",
  "key24": "4j43XoUXraZSiG4nAL6bV6yVePjaEkSG87MG9JRJRZFJy5fyCFfn56VYcGmWrHP5GBMN5xmEDTnApy9rwp9hL3sQ",
  "key25": "GQb24vHTJEFV4pLRFodPXGZMCAxfVi2yEHtX57YtAxsUDCVwGyfp3EDgYXJ7fKiNacRT9NAuHd2WEFNBe7LTswn",
  "key26": "3htubzcK9DoMskN6UrgKCsuUv2mLGh7mv7PvgexJYzNtuDScr7Q1xEnbLP1w6mJD1m1rs9SQryos6kex5YCg7rVR"
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
