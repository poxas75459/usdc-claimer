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
    "3wywxZv6bd6fDYRhgmJ82YtiL2p8MDKBJ4gj2tSozcvmD3R78XzpfYSQrVo3niPwv3UQuugLLCpUQBVMnG1KbfzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56nWUmFUCkXySvVMzqCBFzuXvU32moMunZH12xLknZHUzfZJWwZpaBHJaMQPJwVmvXJSxoFQe7Q8QXNiH9u97byG",
  "key1": "4G1xcLmBTRHSiqoLn8bFx1NkMY9aByFMT1tWZsM5SvsRR3frbYJeffuHPo8FfKffijLioArWpnxHFzik4g72f6WY",
  "key2": "Q1VGSUQzyFsr2rDHuuBW32RUtbpqheso2NdzMicEuseHLpc6CLAq4J7HoieNV9mjYfhEKnyVnFq4okn62hFxwVK",
  "key3": "vF6H4g1Rkge6ASjDAVmrrr7w3qKmec2MwHY7HxNMLeaK38DSCeGNUKEq9CUYtxKXjaFrDNdGiwqGPX6mLGgGNCq",
  "key4": "5bsRcQdC9aTRW2Rz4qsjsFLAPEU4Yz7hZTabzAwpeA7wm396pymh8BCrkX7ThprieuhCYBS8Da4KfrSecnEhrYmL",
  "key5": "5CEXoauz7Q9Wq9xuVzK2eLiEeQfhPX6rDVjhDdYagzvP8jLWGSxKbkK6G2QQMy5EvyFhpGyVndWkMtBrCVnEm8Jj",
  "key6": "sahrhaZ1ktkrYaNTD7d2ZpNY4pB8yAMAmpLFM6uuCEuDKDCNodUXvtrvpAxs7G9fNE4qzdgCUJgaQTPWaffY3aa",
  "key7": "uKHcicRog2tjZ26kcksEjMdBzhQxYunyos7Lga91KnDV91qra7GuHjDu2gnLQCQYRuFQBsSbLUhu9MzoAFkdLSJ",
  "key8": "54HWMuoqCG34gMZK3RBSgBFfbyJpEkZm2KswFbUckcbZtQvXWV2fUfcaNXZoVCnneR57afTKtZoQ8oocdWtavEgi",
  "key9": "3Hs5TpUyD2kPDHaJg36NGZSrhr6DFViLi2H426GsRYvKLRLDqR1dMqNzzrSP6JPG3NGFBHUNo24R4r1Fx8aEwCkc",
  "key10": "xpkCvk2UnecLZ9nii9HjeARVu6TSqenEff8RgjeZ4Zc7Hi3o27hPEvrv63f1F58BavckDJP7vFfSqKhC91imQU9",
  "key11": "CkXpKtjWRMkJ5sPq4eX1tY4MVArpqeC2kZzLcpZZYce8MmHAn8EFBX8DDQ5VVCfm5SLbcveXFnKmZMTAN29mUdA",
  "key12": "66XXr7J1VQkg5HipQDxMrfgb1Un2ZKw6DEvYht5STTTDQYy62HHnbbW3ybYgFCQhi5n8PkQm46QmznreBZW4teMe",
  "key13": "5Jj5gSx93FhfkgF1PGTSme2u19U7yvqw6TG8o9ABq4mhCX8ykGP3xwih5kRg7N5C3cKb5TAsEsH1yWhdyE3UxYVG",
  "key14": "4dF9nwxWK3WmPdsaM8KYUTtSx2XEhQS95zy4GsGY4QaWfiNjwWk15VvxfWUAMkkUyY5whGhTqYWSTtuyLZk1FjYa",
  "key15": "5C2b7BzY2fbQtn6hp5Cr6CfgH4VJnEo1FPPwpNngcrRh3qqvFDTPKyjED9aSSLyWahvuUNz4RVMBGcJEVwSMq73p",
  "key16": "4JSw6cjpqTaBR4kNvwpsWkHemUYuNnpyHk7bjtXsQtP1TFR6ecxQvpCQSdR9rgXbsmTPeoUpR8oMtY3WWbLKispZ",
  "key17": "cev7LhEdWD2kENXQmKDaA3XDm2du9H7TtjbBmvhTT4ktXJcfzg9QZGUPwkh9EvB4RQSLtAe9HjYFa34ByjndiCz",
  "key18": "27khP44xkjWrGDD1c8TMrJpMwDVYgqHGjWNqUNBLRn5HBH2kdrzr3NEz2eSRMYDa2DQ5WrqWNfHtvyj4cuJVrPft",
  "key19": "2XcqHzwmzSDa8pb5MZpJrwLvMZhQmE9zAk4t9NJfczUXXrJqMEapbgfLvjECjKAGdMtJZmGiWe6jHBcFGMT56T4a",
  "key20": "2R9CuHRVzaXo8xcP4feNUAXYxjeC8QhydgL3m4DuBiXVDbENv93qAdLDkxJe8hY29frthMQEVAGKzv8TcygHZPhh",
  "key21": "2SbMiaMk985wTcSRQQMB3cLJSD8dedDec5oRdjQeFpPfucajodUC5cUtcpupADWmJ3w9C6uLwUfqcATGEkkoqSAb",
  "key22": "3PoDAoSQS1HS6fxM788YuodgK2kjvuJoLobeSWCtZFCViZBgzz4Q1LHNPikWA6HprqzJ74mq1gS6gUmGNX2dWurY",
  "key23": "u1oxJ3NhHyujxkwx8Ntd7mHX5bTrrYfvGg5PHbuWXBr9YReQjKiPW4PcwH9zf6Hpb2oD4YNKhAG9VxXPyCQmie4",
  "key24": "CabG1tH6PQbEAvnWg6itrYWbK2S9v5Rxq3baYnkPeVqgTsApTCKyAqaJXQjxPKkfEbCV8tNpxbyjSzjpfbWj2RL",
  "key25": "5zbCqq4GPeE1m1FZcsjqLtGmL6241yBzEE6Wgb5VCeNMKpzcsBe82XZ8cCVs4ggn1bXU9QwbnhU2CZHZajxsfnB9"
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
