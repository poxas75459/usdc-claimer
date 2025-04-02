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
    "4oRCxrSrRbMv5TpH4WihD3nLjirGTmyK3mpUf1WnPgtQGsaQyfnRYXWx6F1zDnpfBosEQTXLw7tqzkDk7Q8D5kgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKTxRunjMHMacH5VLADwukovDrd39t38jTnUiHh3ZFYicXMtzBV2syaGaSNomPMR2xt2hxre4pvwA32VTpyP8zM",
  "key1": "4DjwDGngBcwseWDacpp7uiYMkJrQJfHvvWjZsHZ2N66uDnXyLGTUDJasv6HD5NYL21aMVtZ2prUrinsGmnLfYMR7",
  "key2": "4MiEGLzT5FBKLnWrozuNJfk4t7mvtzTcQd1R6fpHacmcg9WXLzPYYHLc8xUGfisuurjwQYe97JYyAYyp3Ax3fcE6",
  "key3": "38QRcpefxfhXqLjqFoejz3P9VGERZXWiRVoSbuaZogd7w7yeiosuebeYVkQdgbe4aKE5n8uRissSJAt6JFcBos9B",
  "key4": "3nYGuKjZwBnsVgEq6Gik2ohHdqYVYVyGFq2pzx7j4b2R78fhL5RBJhWTNKaogPpunuDMHEJPSR6WgNAB9P7bS32F",
  "key5": "7DweFFj2SM2LL5qWaaevoqPsMr6BuwNNWMTFkUWuBE2VPBvSm3uuyY8FVU9oie84yWa35xJdSd4hFWTFXSTHvMy",
  "key6": "2Pr11RCugkb5UfmsfycXwXbUitMzLHKpaJ6TGyxeVCrHuoFJbJPFznkyVshnv8bHuy7Q9kchJYatxAxmLbySWHy5",
  "key7": "5c4aXcEL5UvM4h6tsr8wFbYmMSuxRpQjHkK854avHZUDaTP1RggAFoUf5W4DP4o4A4a6fFMHgnrGwiQMAj1WfG1j",
  "key8": "3Xp92uBhVAr7Lo1rXJX9CRp9VckoWQLnPwRsrx1tG4hWgGX2daix9vtxowbdFwhP3QdzJcUbh23gq4sz9h3P67Xw",
  "key9": "2gL4yMhiHNqEsEjPZ6CQNe3ogPMzEST7eyjEaQM3XZeN2p3Gb1EC4cgkkzvLQfLWiDyoJdVoZcok2x7Sshvs7Ezt",
  "key10": "5seXp1TEuPniAMdQCB4K5SB6LHS5yg9RTcxFHDwq5rJGsn7MP9kDX3E1isRphRMG7oqocv5Ft2in2CQNQYXgs53s",
  "key11": "3Ns8QdNMvzMCugPJ5gMWRTv4pbSx8kLDVzUgDPLTvy47LfNZ9WmYgcdCExXhQoukc6988zG3iVbXDrECf88Yqmuu",
  "key12": "2ndpHeF7gG7gYBUtr5xLHDBZQXFDmGP9M88cjAgGhebdgshayVv2L462mDH9cDvCXeB8votW8hcHrGYrYw52BVSE",
  "key13": "2zz64jNLj2mcrK9WtwugUJxhPU2SZgCcmRumQ6u93FQFVNtkSXLhS8HjggiZtAECDdVa1prNXVLSgx6jjY2EMH9a",
  "key14": "2zP8aeGuwyoVFaQyH1b6PS9tTo7kBKGi8nnH17NPoTFNVFmYzkzVCoz7N8hn2TFo3kzDRabbbehZ5hVyC7QBs7AC",
  "key15": "YNpfKaSjJ7XPPmdavRFLCr1SLEWPxZdFpCZuw6wE4VMVCrCtS6VJvzJgWnc3Yn1U6AYqv1EmdV1stJdr8apbLKd",
  "key16": "5Tux6KLb9quBfm3fU16SHtPQoKzrWryC2HoHMVkRwPKgEAFkHi1FRuJHZGEmSHPj1XGXUHx8mDWq1EQsfREdDCXp",
  "key17": "1vKbRKEvbFS36LrAuRSbLKRhxVhMR4t4vwT5voyxCMFZdCpkuTuwTa61T21jGbbUCCcn1jHzyhFtzVPuFDB9EYa",
  "key18": "4Li5nEsq1hnbusLE9epSH2fcAJEBdxv5Vv8z23DMwgWNDUHVcmPvuTsYxwbxn6qkkjmQyQfRwjWED31aAEC3u1zT",
  "key19": "2sujURuBWGstrez6fDdyc7VUi5xDpffgW7TWa1GR8KSZGpWUUZoLhDtofpXWJv1MV86gHVuvTfTBNTCjJ46WqiFs",
  "key20": "GgZ1Uau2WfCuThCJhrYmGcbhHhGeyRBAqWBMdjuinaq545YmyHjhUp7z6MmCBmLj2kkfHvwdFFtiN6MkfJetwfN",
  "key21": "5or55SML4c3Dj45dkhpSBvnQCdsSu2M5P4qNRHns8Qs9577jBFfkU3g4zRFLDmoB4fXs3LbZ56P4DYPMGt5cZYKe",
  "key22": "4sJQHDVnScZiLA3i25TtXJ7BQxY28nmgxdHYnYzF5Kbu2Q8uop4S36TPW6QV4TSbKnpJUyPmv7dqAkHSuwPL2Dpg",
  "key23": "647QgXK1a7nKP7eiS9cPxjXeQevXPeug5TGMAoitYxNrf5prSKiSHTjpLQ5k7QM8ZqYV879hoE6d9uAfYA6igRev",
  "key24": "5iKN1v1bQHhYxgXy7sLbcmsxbtANBCyskwZRd5Q9VVJoYpHCST5bqd7ACwSsVCzD22ev4Fit85Euxo9gDCAk7c3f",
  "key25": "2MGKnsCgQd8op8fduwbb6M9urfdwn1p26r2FxkjdKY5dQyFNpK8gqWcrVo2LBFacRLdF2Zc6kzn8iVzZVbzy7MWt",
  "key26": "4qdjkjpvpBGL5jnFAop4svKVqxg4oyi4uWJUNbKTTN9CYyTA96tr4wx2USnGARP71d4XEjiPj4CJA7WnnGCM7sLz",
  "key27": "2YkeWUPaQxFEK8wHud6YFKEpzr18uwaqRmHdmWcruvXyZ4dbYrgyxNavoP8YAF2MEitTjRgjwsNEnfZBbW4QFYWq",
  "key28": "3YyC9YqV5XiUqZUYPdLE8n1TRt6x3BnR2jd8j49sv2tPZjPJUwxcNsSY2ngCNTq7bTrZimLqz32AZUmxd3iusqmN",
  "key29": "4SdbnuLUQeczUPwxC1oMRY92PSvJCSeTDZMvVpBYPh8oYWmKXcVpdooZwYUJQkNcbas872uA8PCz7CZMoyTf9xE5",
  "key30": "2aJZKaS8prxgTAJLA9nUkq4TcVQEmW96xxCfwei5J2iWeGmJqkMe5CAVDWzMAd29h7ncRr2fYScrL8B63Z954MoM"
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
