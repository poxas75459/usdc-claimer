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
    "4Z75eCkVWFW3t4mGStngAPy2XMQC4V1mZEzwV9iUn7k1VMUsJB4PkRJ9YoGYMPem8TfwErLLSCebNEndbKcCK7wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mquebSAEZ5XQbbRmgtu5wfwXiaHNhmgvR2VuF8mDHnaF4ozk8jwiMKRbDZQDYigA8jBgoSy1VQJtMJfGqBtgLBb",
  "key1": "3Z1o4i4f1f2vvJQGnF4HRvowHZ9PJ1tJyHk2fcLJTwJ69ciRkjAzkFjRb19zAQPQAs7ovPi8Qf1sXxWVZzFedA5X",
  "key2": "4p6krCobHe8mE7kKAnbvc5G79uBAMV1yt9ShPmRpJVMHPZm1omSuC5sEnvKaGJvHcgnmycCyuxyxnULNiHXD1Eqc",
  "key3": "vGFQ1ZxFBzMbGKtQmDb2TX6Tepsp2hJgzpxmfP4qYiQ31UcFoU8L22it9BAcP24YDEwGHnme9fLxeeVVpVMgBCs",
  "key4": "33ncqLcm396tLFhMzGupGrtELgzdoJ4UJqDeX65dG5XQHQpytBrtcymGXNheMwtBkbfCAiayZwu1ezfN6NXACvDD",
  "key5": "abgXqaoBMDRcQumsHtVbiZqvQ3EkDFKYeikQNYwS946bnNigXpGe3mXp84MiEjZjbRofbzqEz8HUTWHJnVPHuL5",
  "key6": "3EZpkpWZ3WDnximAjDVXayejNBENXSJocMmZ5rQ8FsyH5HU4zMzKj2SFDeajuV43Yu5PpbUvdthJGccB6EWUjT3k",
  "key7": "YXGNckbEXx8RXX8DMHHZAG7WvSmu9AejCC6VR55oEsDpqevyubs1jmU7WfdTCLdYrEioNthshAqxSZutPHHs6QH",
  "key8": "2F6ZCCLKxzQsWjpj3Tdrn3Kq4KB9uGhMQvEchjnXJWjXN4VohRvfQrTPHLTVVMchxthnVDecmCpmKEyArYZmLW8W",
  "key9": "wZ3DFHV12LGNbrWpaFgqFvQYbKXKjmoQP16zRpFaKtLBfr6dzcERpfEBcMQhNFNsTbL6GyicC3tRfyqhw5JEZcJ",
  "key10": "4vPqNJmSPAgArWFSfQQMWtJDWsgfJJBwxs8HtzDLRud22saCwR6n4TCYwMdhMfsJoRvwi1bepSxi8z88zTQXJygY",
  "key11": "5c4N8bAnkqHfaLG5EjFj9wzEgxYZMWYYMiwoHCEzAf9Kc7ufUCHoFFrLjpJpRcpJYQoGxa28WYBrwysEevzSek2J",
  "key12": "yLC36q5v3ZdieCv1CoY1TDkscwJVSaUNC8rjPQt1jWxQ7G6MsZPMkafrCVoLprPp5zaoMhF4xHpzEcev9PG5iiw",
  "key13": "5GEHdas97UtAv7S3dK96SqHnqKz5zYLwSpr8H7c3Q6MeuJUBZb4wbCGr5ZnHFwUgHGFqG2gNWR5HSL7jEVusJmoT",
  "key14": "jFyE91RN5MJ9x9qV4qy9ueRPSqWJ8zu9JeTCFazwpmHWMY77XsifgJTj3Fa4G63n2rLfhvfdxN3JKujMZGeggJN",
  "key15": "rFo89JNPpwyfvHryHhsPPu7erEzfAchx5dnhSCJZGcqS1ueghEFDEMMukVnuxoBmv24mNipGq4FbRBUiq88cBcL",
  "key16": "4iVidxf5j63ypRLrw16KnSQdbBTXobWCcqN3U1eryGx7TQKCERTfDEFiLFrypRx4KiV7NfEXL1UFfYj3b6QhLYWr",
  "key17": "5EuLWmqkza8bfJ1tZtXbQDKo8faYYTae3MeUHz1rpGchMHtmVahgVTr8TLjLvE7nmCMZAugbcppCEqb3BbBf3DXc",
  "key18": "35D2ffWLJtXeU1D2gkkCR6H1FXoF2yeNWcCCdShDEYsmbD2C2oJWbuQjYKYizNxWXM4LyrX9Zm27SjfTrgmdZzL3",
  "key19": "43Hxbh3pq75EE8wTiFdZNoWy9Xg9FejB4R7nvfkhwxihrrUvmCJAXyiNvz82NYAWmtk3GzW6ZFoB3GLCmRegte2x",
  "key20": "3yaHudnK1rFGJwT6fe6y1misGSZSkrvAiXw4qSoP92n65y5t76gCAbGapF89BjdsHi2bNMB3d3emXBh5D4yrGvF9",
  "key21": "49ZzPZCTAoVSmRJSCjXQcZFhmVSWGiMGYKSwwr9NqZ6GDeH18DHB8ucSx6EtbHXowGbqPuoByAn1qJDcXTKQ496x",
  "key22": "5cb7kBUVr3uHE1RXidgwZX67heCmJGDA1ZLeQkQMvQVBPXhYecVvL1UqPZ6WnCpmQJnUMtfNKDPmXZf8oPYXPEkP",
  "key23": "3aGnoWBa8biGWpUDwDw9saSjTSanr7ykuD6zBegahStVTYr8wYkfeow7KCUL9gVVYiNyDkc24rvbYRJqa2xoscDt",
  "key24": "7SjyU9vNg3RSQ6RPSNANHYzZKMCdQidvsiLvcUq8ZFaVRJ9rgdBMvBTLWzuHJG7QeMnGhqzBuG62n814XrSgLxS",
  "key25": "2MSvr9LSptwdassPrQVgeeAgzYtFXtZiqrFjZ9pHwqmBvtJGtwWATQWnusQKk4RDrdbUpvDw1ySXmWpFnWxF8pfS",
  "key26": "4g7cMfjyBVzexmD2yQz95QG7CeogPax4bEsiqfzMCCj6YeR9cLysd6WVfMJJxz8Lqp6yAA3FDheNuHacyZfxfWHn",
  "key27": "44SzWGoSWfgqPzCWp91BFUtaxv7KZ3ZsPFZRRgzzFYo1YM2zsyJaZDuTkTM5xJfRe7BGaJkyCbXyFFADNcQ6CREM",
  "key28": "4MvBnLuwNUkMDo4RL2iyXafLHUGxeRfnK5fapgHBBUTGgSdFWgNAe4Mno2ppcT9qxY3gMyT2Ntq7aVTauCQiBnxe",
  "key29": "2jSZAgdPMpMrGS8K3UopuATvQTxbcgcKbHxN3S8V5MfBpifUejAYvgAknwqvrUCXb1svJav75sBWbS5fB6VjurKT",
  "key30": "4JL9vjhxXF47CBXjxncRFQ1MyfkuiZQRhQRuMJ5ZocZP56xVYKwJiD6wDBB2y4Hmb2jQbz93wTLFanqvNmVXpA8v",
  "key31": "4TrdZVKuygP4Bhreyh1jQfVcZBP96o3nxLcH86fUhV1nLQpkrCbKdBhhrPcQRLLwjAA4Vf1HsHmC3JvgPeJFK538",
  "key32": "2BFkMLjicBLTszKdzJs2U6jzARm2CGixzPaXZZTXgb3jcdmXy5dJdpKieJUHfpMLjUGwwY2WLpLL6R5sNKA1JqwX",
  "key33": "3H213oSz3kSFwQ7hkcny9cNwVZnEMxhPaLVZ1gBTirLtStzumBhmPLDXuPyzrsWFnmC2zQ6pmbMX618yofrmJ3wP",
  "key34": "5Wqk5mkuVVkxawN7VYcky4Cek35R58i8cjv4tJ4vir4GvJLwgKbpG8N3Q4SMzCRrozWyEm3Fk72KqsQRBVzomCfN",
  "key35": "2xJ5t7B2zmVjzcDDyhiiq5MUYh24RJQxenH5hhtFvwujd7szNKauBQM1dbF2Wd5XXQvYXTSRWSNBUyN3Dr3uXTFM",
  "key36": "5mrUV6cTZAU8eJAnj7KhGzcawrEuKk9Qpw2AkBeMbeEv6Kovae6YoxKMsRJHLpFAyZTHBY8amAmo8juotK2on1wb",
  "key37": "2DZeFSDieNUWtpv2miJPb9izgVg9G3B1J2s6UKRsMpmp6BWpEgSMtCqgga6uipitgJXX8aSdaQpBdtcPCBhZJkSM",
  "key38": "3ssQ5KZnnmH9coFFeVh6dMX5azozkPpBMvVf8Y5GU9RkasmTtY1pHdeUamQuMNvE4ggLMcDUQDeA8qx3i4kcfroD",
  "key39": "4in98Y4p8e3tvHveNaBUmNu8D1km5Rb5su5BsHuR6rEV8HwskdWccHBg6A5DcAHoBkCUUwUtXpDLx781BgJZJcVj"
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
