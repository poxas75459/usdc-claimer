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
    "5d4LSSJoTvXapPs412kYydFcZCLy53qojNhcPMb4UYGCntypn4EgeWjcXfPAFcFNpHi4sybcekcwcVqXXmN86uJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKafWtgV6Lfo92yJvrCGk8exwEDWDwXrTcRXWMceoRLctLiLoWi1AmvMgNDtwgqv8nX4efDkgWCMmb6S3jUu7Zb",
  "key1": "bdT7McZNyXcydzH46Menhx8hDah4n2paHMifTQkdV9CHBcNftSogxMxxVjeDFXW9sdGi6TYUHK4HvRFgAkHkGUH",
  "key2": "3DB1HSJqSdGSQWDNe4WrxEGeTeJrt5KpELiMXDJihJavd1mLEmV34AmWubRyWkms8S6CVedwTKbyFe2zBTfEKPXZ",
  "key3": "5FAEdeDgyRt1aWqsHuKb1D32riJTkt5nVGPiS6K7HgqNHbbrJb9ameTp1gWP4UaD6ZwLwShkd7BnW58SKDW7vEVH",
  "key4": "5NHq8gKTU9TM52GXHT2yHnHDZBchYfo3i3Rbv4u354tjYwLTi552RZgsay9Lx3iS4QvjocZQYHAFZqYagLtiWVCQ",
  "key5": "4nT31ovY9xTbd2EUqPumuJxkzpXjFZdn2c1bsUG9g1Nri1QtbavFRiHFqAdVNefFKCnXxH1aRX1gp2aEnsCvsDP5",
  "key6": "vRfsckDGva5zLTuE8ho6X96JAPygf3cykiuABU2kZvnPUooe2g71gs3vRLTasb7kyohma6qdkT8DcMRvVLNf8bv",
  "key7": "2uqVnPxXYsGyYtobPFUDBaEjtGTgyA8LiU1QyYv5QoPttF2ewSg9iRM4mkzNVT2docs29f4QwKCGTWjkLNgw4nPN",
  "key8": "4KmSeVLEQqqkEYWDAoXWQbG25i3ziZcwwcQLi2PUKQF4n1kc1sgQm82Cnosm9LCZRtwMdvgjX25eDFs2Et3jbs3k",
  "key9": "3QePhwJQD3Qfd295tridwCDCighCHdJQoZqLNkHJPkSZ29kiN2E5B1x8KHJkXNdBkfQQP6TaUx4WaMeca4sQvaDi",
  "key10": "5QmgpxFR9YiohAjQyNvjbYYcRGupTFkGKkrYGxejN54LXwh3MsLVKhMTjrAVuVyq1p2gE3TsqT4cYZsRYZh1UYMj",
  "key11": "5caix3f7hUq3bTRSdFkr2T7tjbEVHECqj4qWXGVd8H1AvNXVjnugA9t1w5smDuWKifhT5Nf1cd8xYDTSHW6XsZdk",
  "key12": "2doaxzP1eff2W4DzYcT9Meo8EcBM5VyLdJfaax35kdrGEpbmYa1fe2XNRnJqacAdq1m7oRNvcvgcRTo2gBSXkui1",
  "key13": "2ToPqNQzNeGbn348pcBL57JhUfRDtsmqSTNJegrYdBd2HqNH3eaJxkHo1PJivUzHCoLsaKUr5ezVx2BRbejwRHSA",
  "key14": "inFunPwtJT7WH7CNjBUp86QBFyvPFdjTqPzSw7yhMW8kdyrAZHoZVewx7V71gQTVMaAGyDL8NNSQ88Rht2T9KYH",
  "key15": "2Gx47eep829bpwxQzpn9chZFMzZuezAm6D6RDqotUrv6vzZjA7R7GP1NakmoZWwy2PMQzkpgb36zarkea55xmcKr",
  "key16": "J41rRRnQxndeQy53rhHXQHjUx2DHfGgNg9AqUyePd4uNLMjcYSjAaTzYZct432QbMed11Ra1o8TcMWgr9bUBTdo",
  "key17": "4gmmjV9S1KL1Z2dpgXu67rJcTahYgPFBSJWuFRBbDacVAQYcPw5mefqnA99pGmJyqVVw4NBAv4FBEJKB7PoZC8sv",
  "key18": "4wcNBdaT2z64nBMxh1F9YVRQ49HawxB7B7iyCrgfKyA6qQ9ESc4FY4GAv4ME79fajV1ahcJKVx7PcXN5sERTA2bS",
  "key19": "4FzQBm44N3WzkfXWmcaVKAUsqCi3SCPTqB2uDwicT4WzMioownZvhM1PCub7CJ7WUee353Rn7ZM5MLavrDmHuJFn",
  "key20": "5HDAmq7iwL5YFDs4ersvqbEX8Tw43pdo8tUNsp891tcdA5iF1ZLZY8qTMg7rnQKqLqBnQHAQa6uYQp1KJLZiNRhH",
  "key21": "52foK3JZPLjb1wdxUhF5uqavzh8GAzxFVkdh3nieQTR5BdbXFWfyWpychRLEaKZRFY6EtUy8GkKKhuiJgTmiAsdQ",
  "key22": "3j8rYrsBn3X92orDXFu5cixvM84B422gHQQXb4nBLmz77Kk2aZDCKwFDj3HMa3PRWEs6iC7iBPv9EBXDkQLrBLWG",
  "key23": "5F4dcBb9CSgze2ZGzrqoPzwH4XdB4rvXKg8PdJ5vCSjpHoonVNpAugNQHvyHjd3EWiTnGuh94q9eKP4a3wRNNmRx",
  "key24": "4eKAXZzSB5fGMF8DkfbFUqn2p6j3D79S7UaYGxAdT9RkB67bsVYQ5v2CBTMvvYmczgj4dSCcfYVxUAVEpaddv8nC",
  "key25": "4AY4VZ6vh3hCGHa3YWS5Xn3NSraQU54JmQvBjJNN4XNTbAR1d84PixRWcTGGdbKj8Sjgnq3QUoMEZF9KjCUBGLRa",
  "key26": "4PB4HedFrpw5vngui4J5nfVgN7fByL2x3Yo9SCbkV7TY8zzRVQuz9NAJkWycakgZbRAZo3JD5m7EF35pa5kwojuu",
  "key27": "4ADGCmvZVYY8fw7rnSusJn2U7MBhKWKkMAosaBjvWxTFjWaxNZtnrJsYGrkteWFTki92iN9Cb2vdFPV73dxwW8Sx",
  "key28": "3Dg7Ya9QEfzzqZcfQ3wNGm4LGFevTj1RHqpnkNAm5JiqtFhe9grHGF8JL8bXm4sYxkN2p34b6yjmQegzdAPp4fKc",
  "key29": "3ocPawe2WiiCKJYmKHEKGiHax6bUiE7WQt3XifKPAGTjeAUMdisaUeDUzsnC4D4wgeN8uiHkeMNCJGrcvRRbWBDW",
  "key30": "3sshNMZAeDub2spoNwFBVQqFXD755huTFjLgGv7JdwhTVRRoCzvBQRre2kDyY6dvV7siGqdMtinGj198RbvaciTu",
  "key31": "y5vDhC78sqxdVwBX99d657ACpkurUYh3rpy1g8A3jaxXxhxqdazTg5V6mUcQac9p7wMoG6H5EMjPc32bmVoDkyd",
  "key32": "4xZ4MZbvrXxRdkSNah9FAk71aTZtykkhDfgWtvHa4GC8phM9ENzCkHjMivS5YaRa1nk4Emq6nLMh17fDSCM2ttpM",
  "key33": "5qDsjXkQrry9dvh78VmRE8BdHiRiW6YG5c35HTsjmtEZyJoYmVqNEmESiiWXCTe3CFBLnUsn42wrD725qp3kZ54D"
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
