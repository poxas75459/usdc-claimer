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
    "5SC74HktJNSg5afxjUk6zSq7PZNz3MPCuCRTATxyvjPwEE5X167RF2kJCuxHJ9G3PHptrVB8avDzp8BG74d2QNWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u8tXWYgpTmDvtaoMuKAz76fkLCgBofBGdLkKFNpe3AQD4ch4pP6fiSdieWumXyQxqmX9gQECgvJ42mcPQjwo1Fa",
  "key1": "429J3Ci7Ufpr5MUw2rtnwFLJaqoA12F5HMpxbKp6vmcqZ6DhVfymNpi1VzicjwVTvjrxB9UQaeum9RmgeyeEpmJ8",
  "key2": "ZmP4wfFkvSKKosT8qcD6DeHUr6ucqpRajN1kseWQPARDU89imHnQ4ti9MAUvFJ2jGLNBLGYZ6V7mrTAMBUyxwhb",
  "key3": "3soZp6UBph9X2PhXc8MUwNzA75LDUZNFhiysYAiYu7CMQToYtxR2cE64dpeeVoLKMnaZ5RShFebZoZDsrnwGK51h",
  "key4": "2SX5Uo81qHty4Dn41utuFmWtBjwATN93BaEp6i5RLBv9CToRdty3YjTLed9YNueiuaaVwYK9bqtQWk7g7Zk1eEFA",
  "key5": "3XsRg8XLupZqSjoTDD4vi4BaRvxh46uEDCb4tR4AB32oRT431UepwDeH2qsq517ubZRjhArUzbHQTo7VXHc31sHY",
  "key6": "38tRaEDVM1BnRHrUP6XeuLyqaCppsRCJrYEhqJ7asQhH5J7Asn8sdSUpCVXHxiRwUrGAGn4vvLD5F5r4yT8bbgPp",
  "key7": "3pWT8pD613gbvq9MTDJcY3c7VAaFEL3CMhW1EjLgjv9LXLTa1V4AwureweAWyueyKQm7AucR1waaUHj9nYknPnUs",
  "key8": "53dzQnjgaecWm97Fz7WwDPK1idrJ1ZoJLHNWgsdGytJCNKD9BkQvre7d5NpnTU25S6vkk5hKy2PW5VSF6DDeDgjh",
  "key9": "5QZfaeNkVESZQJMFNuDnsecE8YUC2MEwimzfoWZsmztQAMtJCKZFBSS47LMt7WnLPdU5S5mxem9K8fkN8mAHN3Tr",
  "key10": "5C9ZyT25No5h9m9FKUXsoXVb836gH79TmMuZnJQDVvfG3YxC5WsnzAYPoZgcsYV9X32UcvRUJTid1EgUveDZrGhr",
  "key11": "4o3TAhx9NbfyqTzGbVkXjSCbwvugZ1q8YXJqSb5Aocx8TCAhoiF8CfkU4xtzZQzYimwJKexadadP3WnFaQvfkXv4",
  "key12": "2J6hfz7WfvUb9KadhBQdxYwzwHeN1sWEHu95mMKiJEZBvZYXVfJgZhbYPzb36ooXsxjc8dzsXGhmwhNF2fC1AUJz",
  "key13": "2Vtq2NAKuXtBFHVZq91PuBvcgFminMhgViDsHvr7KdWGyNHS65gMwybDTQ3gnSaZBbjkJumVEaLZn458iLg7TPXL",
  "key14": "62eA32hkqrhFnpgh9FFWUH5fzgdAhWf15Y7bKQDvo7KtFyUY5Q51K5DsHs9vcooTpPhBCZzkvVWwrxaVkjdoeqDY",
  "key15": "3FefD2uUKxxQVwYLq86HEgPH3CCtAkTJz5FjjYknaajUNVqsahW1AxwdBW4BwMLN9tWqR6Eo8EjqLF5J1nwCvRhi",
  "key16": "4F6338Hhkyamr3aNEQP58TkzSTH4ZDqWNe5rQZBiTogoUEtwpqPuYv5Nz7h8xJDe4DVhnq3uNYSZSShyPXDcwre1",
  "key17": "5KFMJ9xPBV4KuKVytzbtbzju4YHSZryxR2DRPvbYa64ZAjxrUhX7uWVc3vV5iG7oYBKLtfnJjm25FZmSkj9fkYY6",
  "key18": "2RmdvanR2THP9mh5umwjJznqzPD5pgJ2qV5cvbjKSybMrSpu66wTeLV8ViubkQLt5MtDqYohcxCBs1E1bqDZVmWZ",
  "key19": "4yUhtEVL1Eo5LDxL9C4KvLpidPFKuN1bqjRYyMmAWEorn3tKbuRGmwapmgBN6KrxDmfmTYfeNgYmUW9serWxtWCh",
  "key20": "3MBn9hbmeA15tdK5FukrkWkFBHi6QMpeeo8vXMRWQN4mKDetKWv1u85zAJk6oeH1u3KZKmo8kgrR1d5szvn5DdaW",
  "key21": "3CFoH3S8e9NUoUjeovKDo9JUsp2hCpzKi2vsvR6kjKuYDJt2iNqcQifEqrvBQ32eZoXYw8AZ4ZsnYF3bXgRgJRvU",
  "key22": "3hdTNfw8pKhuwYVJQsWofLiDqeMQC1pe6ZV1mHUpKbQYnAxec5jziDMxAVgarmSpz2geYqg5Mmv6RLXEvtvYafct",
  "key23": "7tFtkKSN5qhuFMRswRigyV9rmk27RQWF9Frdr63KwurrZNHC4c2hDjeuBJoNJP6peMontDNoVpj7PnH7Ev6Y8Yo",
  "key24": "3yBhFAfpDZoN6hRGWY9q82QBi4rfAFzhzNA31zRPHUGBsPzP67WDj8z1GNid2qq2ULELCAqZR1W3xEUvW2TP1Y2T",
  "key25": "2p2wcsbaUjeq26Urq8yHW742g1w5CdKBZxtdnbP5292LbEZNKWoLpwfq124E6H8souQa3dkE5JmNHV3EmYYvdYvn",
  "key26": "2XFs8QkDhvdKMv1QdkRdojbGuuGMa4EPEQzxTXjoG6GhHxBYBHq4Hizt65a5hPgNq8MHckC1E6NUrbMQSFUL5ns5",
  "key27": "5aYX7TDH5vre4pwBkaPaVnbQqP1fNMHJ29G5kr6PUXXfJkrprExMoDsqshnSvwXzrTn5on38jz16Qf5B6Dq9ooCW",
  "key28": "3Dyn2hFMdQ1zdLc2q3kX4X4pu6tzKAW2rNa7bABR5YU64GV3Z9WKckPMKPPy5nXykW3Sxo1GL3A6yPMfMhVxGQEM",
  "key29": "rVwW9BFPWzBU33PHDqoQyHjDAhzSZfBHTPRDbGNzmUfDWbTexVT9w2Vks2aWkY6ZUzwXM92v1H3KkpQb48s9zH1",
  "key30": "2BiVQk7y3ShgKKGPT9oESeM6eCHcJKJqQQNbEeJbU8WXFDv9UMj9BjvpMxRuGMNDSaL9RimjfjJHTyNAz85LxwpY",
  "key31": "21aiDSBgn5jPGg6AfXT87bVKJt5QE4KvPUSM862riYJRNHXLRbCndpW2KfPtqkKvsGcKzjukYYxjRDB8AS4frbNH",
  "key32": "uB6dCU2KfYQg4rxrNof37ChLmsccnQQ662PVdnnFmiJffhSqErQA73Sk1Ky1KvkEuRqXGBXYBdJiYNKNNWiaAdg",
  "key33": "21McrfoFW68A4eCWQzVpoVJMY6L6sK8Jp4UmmcNy1sJ1s7seStnCxHWAbvSWLpvXCajEJYvJ9qavxewr7kcNZMhh",
  "key34": "3VTBo7g87j8LidpNP2yaMiBQT8QLyDHUAtfGeuTYb72xYak3Va9KxZ7nhtGRt3T3MKtKNBCbJuL7iwavDbHcpVrH",
  "key35": "KWgcfqRKoLYCYNqjGR3sHpno1hz3eJMX4rWRYN6ZbVVoYC7kZndYYu5JxMPggxb52oGkKoSpffEH8i9GkQ4cWPi",
  "key36": "2LjjWR5FPT67tb4g45rYp2CL13jRtPdgp6BrPcizKfq7hLnB5xRJeQJWr6ygUTfGzsE5yPTM8yPVoFvPMg5upnKV",
  "key37": "2oTZLfzh1vvYZj9ipkXtxtUycbbiqcTpfN6JqfmqZK2BNKkj7pwQyey777hRJW1CJ6cfqd2B2Xjj1LngyvCpfvKy",
  "key38": "39W3cy6o4U78JdKTGpEZz9gH52F7YxVnmx6YSaGDmDeycaSYwvY8JY2BUz4Grw1QQagefPGip8P8GzpqHwDp7KLr"
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
