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
    "4xgopjjXFCok3URSEd8Bo1MzVBPdvLhgS44nRoXor2yK4EEjUSVy6mmPjNoNgQePy49AExWhgNAkMBWJuwARFjLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T4JDNNZrjwPno6yY2WUgra99KrRyaU5vKY7zcWobb35kSr9rdqu2FY9BzGoRAMfGBvT23LSvWf8MoL2xtonhBhz",
  "key1": "65xwsyXN3TGtwJnewoyLewBEr14Q8xjqAVBbhyTvpTe3kv5KBT1YhQKZGvFHWARHFTQ4U2Q9kKxvM7U9X3vnEp4E",
  "key2": "Z4Nz2gmTbPkXKXbR5tbgfmDxdGpkP7ZToX83RH286ttXLL18wjgZXgjpw1vHm9wA5MM7L59f3A5DCNtvzfjaeXF",
  "key3": "3eVaMJgZJaFoGJw1ZPTEWMUHP3Asbxdhz3Wtm5wHTEsd12P3xzYSa71BKYG4eLQHBRB9XZrMg7L42p4WfAW2oJFc",
  "key4": "454fUSE7F7eqgVyHQ1L6a93GgVxqj5nxEHjxzDjbdLP8THujdFaVsMAKsTxTCH321F7MTMTaY1LfiLcBR9CqrrYT",
  "key5": "5pATUQNnYUNSLdbZ3mMi2FMprnXHpgPzpvJ6UTaKyzL9WUqu8xggDd7U5i5Kegnb1hVuMUCwL5Ks24KwaZ3gSPsi",
  "key6": "3wmKXD8Nbsa4NnRP8mDJZ8oL7FqtgU8tRyipvAwV8jUcbSzhHKFpoRyAXpN6TjbioStg4we12me6icfSK2Sjq8ZQ",
  "key7": "4f5gsmHPfaw2nyNeCX1g2rCtBVxmcpvBzHiFJUTjAPDjoHP5cqtupCw4E8bDiSQQf3MRRYragCEwbYb76jASikkH",
  "key8": "3NNg8yYURbgiSTyEwesy8mv5tUFwCTReKfVjEs8Fnhf96X2UQKpDSohYHUc9NPKPGu5MJxSanmFXox5bnMGzYy8t",
  "key9": "3DPZuWWbV9zE2qEbzsp6zQ4uxoHhXee1UfMa2tuZYFYUCsnGoYaKhQU2zhHeMqV2hwqkrpYYbAmoL1NTgyqGet4C",
  "key10": "4ZEanRaGfi1E1kqLYfXAw463QzPFktuB16R3dZfWathaA2fb7jzKmEGXKHGeLRe4jFnyonfs7VvFsiFtV9f7VVDH",
  "key11": "2rBHX2GE7i3XL9ZSX6B29bJetgCzPXLEF8ddznv4LvJTJbLsHFBRZCQrgSnabB97qxiLVHQDGAumHZkKbCMP7v5J",
  "key12": "413cEYkgVfaEmDALPyKPzUXbrEKtcpjeDdbaEJfDSjEyJj68rjxx12fAoUd8W2GTzJ3awwmM89fwjy5M53ENreVL",
  "key13": "rZTbQ1pArsDCnLjAZSGScW7Tmj2AnCojhGDo7GrfpvziGB2tvdXKEfgSj79D6aK4BH9qcks89GQpN9EonGqwPQd",
  "key14": "5HrvmxBK2GaKUFUXX7BfBE6ZMZJudygTFVHRxzMYiKjbtQhHpPhDC2eQRBxWDBv93Utm2Rdi3rFSiaEZM65r98EB",
  "key15": "33cW9TRTgkDXBJXkDAQf3dU2hFdeerTxVayhft3SJwriDyBGtm5RBifzTKJQgs3WpoQnSzsETUmhKQ2rnPDoPgxw",
  "key16": "3yJVXCcV419oZcaNobNMh4YkxYyy1XKbj5RC7jR7Gk4z9CLAoewFoPnpadNSdDeXBhxwuc8frGqonrPwqTi31zB3",
  "key17": "4y7KqwE7GXR9ybWYkxHzdEGXYYo9FMa5G8Qd4vWZcbQK4CWSHvZwLmTmUQ4R8EeyDJpfMNtx4kYbDKK3xenofsMn",
  "key18": "3gqXpGoHNDMZRWdCSEJhrqPCH5kTLyUCAkhEBEsoCPfPn832SK9uNazRW42TVjTe2pJCx2eDfAS1ZT7tVjaguH4o",
  "key19": "39fDeU2QPdXTMR8hysa6kfyvH2caxGfNFC1sie3EB7QGWo3piYXEsBPgx6aNVGX2CsRQc9BsTyZ4LH8AMcf3Wwmo",
  "key20": "37TNrsLJ5yVHUvjm8cHkZmD1LTGicAnVaL4HhigFKBTwyFCcaDzecFcw1eoEiFstngiZ3Tt9untseW3TCJqDVuoU",
  "key21": "51gbdYxqWbQWeNsv8arQPJ7Qmg4vuoLfJk4o5G2WjcAUqR7q5dL7ETjy4f9di1KWXQ6CTBsqP1q5vWpCJmirXyT4",
  "key22": "2Zu4ocDYhkRFhoLSFpMyuAL48Ca96yU9TMXgRj5opTsmRo5pn9XmuUcRzU1UQyPZyMAYczjCCXgJHJ8kNHkRJSt9",
  "key23": "g8w6HtZMLxfofy9KZGcmVCt24bBhVoGeRKYSrxzivbzkkSers3AoM4z38Hdaa27vY9ASpcuUYF44KpzHrUEVuWQ",
  "key24": "5WMnKAdAm2ZCXDBRQWCTcRjo21Ns3KYX3zRKECLytcr7fNDCRBQxBLa332z8gN5dAt6mGazJm3bTsQun9aG5Qnsu",
  "key25": "2hAVuYecppNCRrp47qjVJnQ2x95RDkA4cxzsQLy9iR77HKd4vQdEGJCmGYmhi8AqsJF98V2QcqTjt1GeJ7EXekCD",
  "key26": "4Yc2joPfBCHPVL3fPvNWYEwGftjWAdG99Jkw8Ucec7G6gAhLrhPCsEvbwa78AD3psLsdfn22r1Lc4wUSdrSqV2om",
  "key27": "4SBchwQwkvMbUbWgcDu96QamV6hicKFuougKTFCZxd47G5nguTFFYvQPs5DjBcHP43Poozm7E2qT7bgzcPwGewP7",
  "key28": "2ctuuYVQscqeXpn1eYbq2VLFxWL8F48H75RjPkGFotQqb87p4UTTXbdooGkphGJgHhLEmssyBQ6iZV54mihC4g5J",
  "key29": "rUcrxvfggbvr3eFTVGEPa6DMfSjgWFUWCF2Sy4ijodtixpooneVUNk4DuDNNdN4hyqVSkKaAGgeEXKpEpA9fKGi",
  "key30": "5Wnd6s19wiFSwHmEShV1TUKta9cWwv1QoZi5phzB2SDSujU77i1x64U7FB33cyFKtRhCyKERiq4AYYJQjBTebMsU",
  "key31": "3AKaCKtZfE2nsecRW7ojDz96qtGkzBrbibNyNcHvbTMq8J9BQWU3unHTrKzKyxq4YdAEhB59BRk9nzceZfE2364C",
  "key32": "53G1XAHcwak9MdikAcYCJWCBFxeVtpVvZGPpDZMz68H3Rw7LaXA8UteV3DanevzNpx3kPWTqmXMbqacF2KZTS5XS",
  "key33": "5PDRWffwzFLBfPbV1CQv3JaJxMUQcdY4bo96C2MsWu45MMwHWnUgbjuYLZWhCT8wNg4af8teT6xUSaaytTMqTwXi",
  "key34": "4x9ZFYcbjcbwt6dTfoQ1D4KuUtB49fQFMvuyvYG3LgKg6r9zfRXMUkF21YSfEGqgRw6fxiSDM8VHKnjtjhxPagNi",
  "key35": "3HxMUFJPCCC3Cu3SZ6jBiADDvHCK5BEJUAv6LYABBa4gdYzpqgioVzQQGNc5thaRHNVXuQ4Vj2WDk8YT8gxvTbTX",
  "key36": "Qb4vHHMAzUUNZhevUYGE5V8JP3Nr1kjNNxBearAzdNPJoFVy921ScfevXTUEmBvhX2YZWXxr8E5XSZ9YdVaED7Y",
  "key37": "5xvSLktiSdcbanpQajtx5LBDPbcfcTK8uJfN62ZQiTu9VXFjAYNUxAnsSKoAj61dNzG2ERE4duX7AFbhHJEyPTaJ",
  "key38": "4Ldw9Rmr3XCfs7Hbhmf4YHZbYoZwXXZ3BEtWiHCrM4UUT9jEebTWtbqYajVn5X98feS9vHnW9wEYdxKWeg8EMUgV"
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
