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
    "3cSXZcxg7q54JsuAUizkL2fM4Ai8tq7y6pvbRzVKfGNjkv8GiWmhxjm1m1mpH9xupLwvp3dwdK7ekmn19vgJSgtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DW2fuu2RmLWrSPnJJen2USMp7GLsykmUdNTYv2Sx5NgAWrW3NCzWMu6Ky5YLVJEAMBERyQwQbFiWeQQFeHcFUmL",
  "key1": "5YkoFnoy3uEf41T4ULdwYP6tn4BJAXFb8AGdGea5HjUsnCsJh4S79gTBtzRA9a1nF8aw1MvTR2faDT76feZbc1Fr",
  "key2": "3NSeXQRYr8Q4zmrxLViuuVRrvj9KdpHhum3gHyhvUopPC8JbvqJHxAZWMDVeudNnM5YYFMQbL3uUtfriuaGqDVaQ",
  "key3": "5GqjyzbFoPg7YEMerpy5bbngD3cNWKkodFRqoBGijPA4dmpkxEsnPBx9tPL4KkY17YGJ7tPwng5crKwzx7xTD3UU",
  "key4": "4nHfD4ZGsZDZ1NEBe1hKChEQXcqqiHb99sh5KcMcg8LczrbDAzFQGa6Fy6SnKuJxvqDPtj57MQEUgnaokpqPnQcd",
  "key5": "2YoYGapGR5aK1ArdqGMAPepEoDzeCVDX96w6G3b46gzGSezLCRqXzmkS9RL9AtuwLRXcpCGU5y3kDjDX8yUU8CRL",
  "key6": "47wuNBC68iWRgr3gRD9m3E5NmZByRd9jVjL5wjNGRhRKP4Upin71b98nJ56Np2rYu9Xmzt9bRZBapN71cviGisqj",
  "key7": "26qrB7WktagyNt7q2oHpX2rw3vnWS5bm6Fy7vg3WgZHVpcBKcNq9PAQRv9r4bnggD2eVAoLan6pRW1iUyboTYpQK",
  "key8": "4S7VRZkEc1YgtJgiLv2NJva37U7hDkgUbU4P53i2xmfhnM8A3suoVt8UiXgURpe3NaoQ74wvNtrN3qAKafhrxb3r",
  "key9": "CsrHCsKmYDyRV8TuqUd6ED1rwsewGsnsKYK8vGdbjaaLTed5uhKS2UaLkVufpiSZj9bsmiN6NvJSvXYRA7VavFk",
  "key10": "oLvf7BxCXZHKEJqSPV4XXWsUVh8NR7SKDaLj4NwGx8GV5eXJ73KoZf5JK1As6HXnUk2AZbpVCwGDJeQQP9xjWF3",
  "key11": "56sJZb8AEmpLNAkQ2ka14gnt5PkPu4CEF228hVrnmJQ4XaQ2C6Xz4JqCDURDBGgjrxRVTkAaCtvJ8u8k8GNiWwfw",
  "key12": "4Bvxr5dUkWVioouCTai8WKrHGQ3AxSFdQi9Faz1RsN84y4zR4jRuscB4WNyqAgbdKYYbFU9nWPCF6FVtd27H7btd",
  "key13": "23ryZ29q1yuYtFFEnuFQooSPnoee5JAt7NhfxwGZZzEeRACiKuoZD6y48ypyD8U7anPrqa3EMLvyFhFoZqeVdeFV",
  "key14": "2QbVbWvPnJzm7Zkp8uGEHiQHQxAUGPVQ5FGUwc2KPg27GPoroGeeALe7eEFcCbRgJkXUkiqzgBnpHLbV1vrbjB2M",
  "key15": "592u5rKYk1YURvzK9VihzE5FS61d23Auees9g969xP4oY4aZDzzQQV8X5jVwQbn7vfsHfsNaeBhv2QYhSGAswiWD",
  "key16": "4ouQHTrmXiAXMFTFxiZb6QJJHJx7mFh2sndtoedP7tTyLfnWSaESvB3DLyRTuHfJxvhNTuUh1hHsfjx3d5FTSv3g",
  "key17": "RBh7oYfXXk1W4LJohEmbheR3hRgAu21BzeDuNmQPP1EcAPPEh2PSbVUSCHVLg2uG1XFN4ey6UcEj4HEaE5vkp9m",
  "key18": "7FLixBUS6wD7d9bcz3y3JepuHWF6AhaNnP4hY9o5qVBfLqENMuASNSUZaqPeiUZrFNPiuhbtzuGPVRZhc6DK4Q7",
  "key19": "3d7JNm9gGcTzskqp3Nx6Y1yXT1rxyuqFvNdHkawp9BJVcEyTUMyXcZWPX5kpLLpB6VzMq3Zddz5yMfBsrwyzyWhV",
  "key20": "21TVdLfPkW1m36yuc3rs17pyj5kGHuhcQxhcBDoLhUYCgj5ZRs1hu2NH124gUPvWToQhS4PFMswAQfQXEhHifULA",
  "key21": "36KYZpXctx5kgF4DKo73gtgDdDKCLDqpj5iaAKtFMNk2s9oAkt6HcgAKL1jwUpPM8KK3TxjGLVm2wvatRSJV28cq",
  "key22": "2CbnWUwqVyrNCfwZUEe3dSNZ4GqeVNyH3LtPEzRNPmJdi5M9oyutxCAHpbyVSLDuy6zC8sNEBBLszZmVMeQzpvh4",
  "key23": "3ZgjjJrznfUsxLoMM81iPJSzCYg1LVGtywS6BSiF53RvaTvtxcEFWJ9JLXBYxqkzqRUvPR5cxtucD9PkirY89nvJ",
  "key24": "5Vhmnk9Ckd1oSUjsf3DMqo3WNWQsupdzwXZBxXbq3jLbqkzgGFiaX9NUh8phRL2kJN9zjrrhpZVVQ2buGuz2AJes",
  "key25": "4JTBrHhpukzrhCXx9bLMykacqB7mzGNRWnmz59mZHzHu7mmhR8QsdPpcVfbwqb72H9CBBaTiS3RimiD1evynziWr",
  "key26": "2TV29C7gTxgmaAcNqaQYPoYdhwD3qyaDnEfvaBxHsHqCLgJimLBehAoSyGd5bo4pZTV7LuDqPMwq6o37M4Wp3bJz",
  "key27": "5yikVrDKNrrEJBN7QWfnLUTGqnke9Ugg3JDBC35XjKwYx43KiKZVaXUN79HEkpPCmPZxYKnUVwmnQNKad6U5Tpd",
  "key28": "xgjff9hb3AM86bLSBZDWPN2RLrFQhsX14ZZUXUJsDQt6krnTDrTs8PcQVbXY3eEaPPuLGeVCFbzy7HEAnrz8Nkc",
  "key29": "4gx2XoPKPPUXbRsPNKN168makAacUHZHUYMXo6kxwyqX7U6Ns4oFn1ZUKLBBQAdVozxizJBuac3Sq5Yo6WEEmzkh",
  "key30": "5DL2Eo4VvQTBcoPRER1TbqZ3nqCs59T5qwhJZSgGsk6LjP7g8dzHNd1aLvq2Nk4QH18uvBVxZKKgFqV17sNbwgLr"
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
