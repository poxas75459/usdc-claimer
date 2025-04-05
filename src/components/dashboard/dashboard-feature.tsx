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
    "33znjqtg3zpdyFcUXFjucHj21jguKmmXddWJs2PyofqpXdkQC63frKCPFKMmFzQQM1awWCpRJwiuK1n3r6LpqN2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUdrw1MokpsYSzzAMw8bSgdmxjnJi3nSySgu9XTnj8QdMoM2GnXZJeAVHnSpddC9GfNTH9mN22aDFyNGGVNYHCq",
  "key1": "2RuYMm3DTVzpxosTUNpKREZvJK5KGGVVxBMCeJXmEi2rB4xFG9iyJJKn4qeL6K2mxKKS12Mw8DjGa35hD8HGRirq",
  "key2": "TEHhLeJmL7HY3dWVY1QfgL7GCYHCcwsuTEUsQknT4k6C9dTQ5X3i9BPe8pbFCvY8qrDhVk6t6jnkL2R4jWTAUV7",
  "key3": "JasADstCKCCrwWTmen9ERsUHw38eTFXHC8W2TBsuMPuHjz2ySBZTDbB7XLm9Bf6LamyRUZ6M3ngNfHTfMPT8vip",
  "key4": "5QANLyzPmMpEB3nU7ekDZa5zXKcfUePchpnYWuDVYtgWpyh4sNEiYFZapvntZXXx6Qsa4n3kHdpytuxdWN8FNdXk",
  "key5": "2xN6uFZ8phvQZWdZPR8RpJXf2w8aGs36LDZQWZKznsB47GMj9UkGwMYsAoKtVwCYH6eTVMrMZcJQnGkzSxswP9W6",
  "key6": "48N8fwJE7QXvtDLkZsPxR7Vo2Mxn3curvuk8QCjWjyDZy7WKN7exXSV9vDDhUAEDwETTDSR6qhCV5v7SdzyGxu7N",
  "key7": "25wGjoZiZD57eXM7te6XA6kbomvCRocGHJGsvBgk7k753LE21EcUqey27y2nPcShfrmk7FWj9rBw2tmtRKr3moUg",
  "key8": "DF5aFY3Qr3Roen8QP6tobSB1UxT8QiLEoEnFdK1BBRnMe1QEPmGfuxoSNj6gKZh32sdKYy1FrxfANWjXc8AXUxT",
  "key9": "3UgdC5jenzUVvipq3TJo2eXtQKf5LwwAi1UmvZgYPoyP3HHB7232BZRGhcLdysuYHoZxKi36rd5mGDdKhLkcyr1V",
  "key10": "GZEuQAMjsps5xvigv4K2YiM1ZtvdkfAuEMe4jMSs5ntyr7XcfvfdS5VTPXLasBPoK4vtLs2LvcBBoUVBzuaT9y2",
  "key11": "5DV2soqYhpG6jtpBfxFR4b47sT6FXkSrSq4j1bvb5pa17DGzjHsJ42pqZ6d7XMqcgpcQqn61zCQjPALQZvW8uYCs",
  "key12": "2z851G8QdPGC1MjF2vQ3dLHZGwLnjYbKxsreU2ykKYC7rpY8FE4KN9cS2r8yJKUrwEzQ8XRExWFgZjMNbZXfE6ma",
  "key13": "5KNsMCkPZKXcUGud8seZMtfFHYUTpe7qfRBTjN5oQGCha9E1XTXiRRCSuKDF8BxZEfYB5GezUEr13Q7MYa1mbHqu",
  "key14": "7Ewj5ZLjKTDe8DnrzZW9WMw7CiB8mv7snzDqTcHvQkbNU9DfqgRZnbqMqNAZ4ErVECAgHk2m3KitfsgqqRG68cj",
  "key15": "53E5pmKXEKkUvUmegqfkz7TtVKNbyVQDZDzEdR6dFpbqzd7J45cAwoh8LyxrJvTGVVXwo7dkaGFaaEJ6TDiiAPBs",
  "key16": "5YrCVdVqRK3UK1Crt5WsxcvYsNCPLnAEkxfKvtuDgu3tbEzM9M9i3Fy4eCcNQUV77Y5WkG2XtzV9swCgbTdTKbYX",
  "key17": "38n5psfg1BwwLEMz1wydhS1Xc9yYKjsuKFTtVMn4zfGjEEosxSHq6di8aUWSVoKYB3whg62W83W3PdtbBaf557yA",
  "key18": "3q58Rze23o29TE4cwgmfBRXQnYmNXCWQhhfpzXHEPynTFPzGfangsbbTfhMoDzp5qAkfiXNstj5f6sNgKwVxon2J",
  "key19": "3gdqjFgmqMZtTLw8KW7RuE8uEzYrLuMYkVj8tpB4A1h1sjA6y56r7YLYWSUvTKBWjZzaiaQXsAjR1AmN6QyJV2Ne",
  "key20": "59RJiL24eN2ZBJFDkJii7QEq3eYSEFg9TVtcCNTLPcKaB118xDmNgA7UdEWUd786uRkvJrn9pGANCqZNE1kMU4fa",
  "key21": "4sWVXBQBg6b2uq1WYhAuqrVeX5xLHZPrhNjKTjmSQxFsmU8fMbUonkC8jeyJ7QL7Ji8aXo1C5JKqTdRmCpQbML84",
  "key22": "yTL735MTNpeMVEqD9a7xruVAzRqiXLcLGk3mchwUMwvei7eN2ocLycU7mWg5bQfTHn9vACzTJTMGU2CDtecgYB2",
  "key23": "3eNQLCh44b9kQEEuRK2kmGFWqtVaM9GrFps7u2fiDriLZntApiD6SLF3p3ug48uf5GDwjZ21UbGSPzS6JZukfkjh",
  "key24": "54tKWiszSPM5TrVZfxUfiiG7uNGnpgVwrvwbpNYoEvky9CWtcPhDnkT3qYLd9MzCmf7n4TfJcDSH5YeyzMirdZcq",
  "key25": "2CFsSGNpo7dUBpBSKwwYh4BGPiicwLwwgpGWH9TShpSCvrKDF2Khc8uuhn87kkD2hoJURD29yuKoBPxtPDuwEb2A",
  "key26": "57BwrMNsJTKg9Pz9pL6YkttnKz9YKeweM3a1Skj6hB3j6q2gjuq53hwZzoZMvrnyH8PLaevZux1PSmHiyCDmbPo4",
  "key27": "3MMDJHU1cBha8X8tuBW1x3DJxMpijjcq6867gSBs1wA5y23drC5E6FswMXjDtzXdWef1BwpfgHn7jVjmEK6ozYG8",
  "key28": "3kWAKte96mQ6JZx3CAgku5ztFhvunTAZCCzmBsx4heoxDJPKv3S84Lxc3PYQMMjZy5fsLyxjfkeiRTv6viBFdvw9",
  "key29": "3qVoDmgfd9w7xAp239TpTyhGB1Q3AtBc7swCbdZVBgZS7yyqsdMhwt8X4mi26C7Dqm1tLU5EQGXbbTFnmSzXFXhx",
  "key30": "2mBecfrwP6US85uiHwfCzCb31fPgctTaAR9X33XQscg3TgLN6U4pe4yuLxZGCi42m3ypndXLY8siATz8fKdJBukS",
  "key31": "3AdjnEGs4Chk15odPFScTE8aZyDS2NJHHfjaXXzPJba3ux33g1n2AvgZLtQk2JUdEEMTeW8Uedty6ofGPv7PKuRN",
  "key32": "5nwSPZ7vgLfV4cFdF5JV6tVUEFyufCaeum9MjvQtvaS6fo3ULoi6Mb2ucskQ1F5y2ApXRzZCP72K1v79Rvt4gn6N",
  "key33": "3wuJi8KpmZ9LrHavufez1eAsATxSn77LwVYcpkt1fhYCLHiFqMfRV3ivVH1gxh168uqi9GGCFMpXVjDHXqTk7S3r",
  "key34": "2gUAfuZTbMYKKcwZYXtvoeaGEKNJnxzTViHWdSFwCYhxdsAwcTRqGx7gJLQm1GYbpobj4fJAPHVLH4iwmkdEnYan",
  "key35": "2M3ogPdpEX3htMMzCR2Pp7Mok5b6nLVwRu79VdZ1jAKgjeSvan7KGpjSLjK8T24YZkpMT5gtdp1wAF6GqFmBYgKc",
  "key36": "4yzLwDTyE1pUCgncr1Fte7g9EFSRZgtHFhb9DTmHqjrAFwXK7C9c25WkKVQai4MfYeki3QPDfkAuAejrsWdbR88j",
  "key37": "39UF4yoJd8zdH6QmabPmqZCi9hUAHiVcCX5oXmTer9bR7PBiGY38h41PfjKwj36Cy5Mt3xdMsrL6Yyfof86dkXME",
  "key38": "2pN6mKgkR9oQYnLqG6zjDhJY2iTFa64cp4CCeZeHMESUo13bfixGRWcWMeuxmGPFt52ZesgvWQtf4NiAdvXQH9aa",
  "key39": "W7PYaA8sS7bYatj4gXjmKDiN1pAt6wXLM1YcQ2yT3iDUZy14j6SLRFz1Y6yPqX8aoxFx18UGbTQA4Z7aThHV27m",
  "key40": "5DyFBb47qT882iuvhg8GtvRkPimgAHkGx4eEgDUnexemTS5DJHCY4D5SY6GT8guEZcFTqHAPj45G2uWUAGH2qLdi",
  "key41": "4cmMGst3oM2TdKNFD3dRbay6NA17x13TSgbs1EquJq2BbG4ovLUzSxdbcXASyXhKUoRfeAsCcmSRjfPEDdCJLVsJ",
  "key42": "4Ami5EunPECmm6HbLvTT27haySMeVnajMDcyjij8zDkPMnjRwimpUKLzVigVfCwTx3VPLP5oStKPdoXQKg4VvzWJ",
  "key43": "57WxDLFiWXRAsmunew6kG4LPCrY5enoPszD5bJc3qN89MNKK9bt3bnZvuwASqE4jZM1bDLp7WoteynKu9Q99Jf79"
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
