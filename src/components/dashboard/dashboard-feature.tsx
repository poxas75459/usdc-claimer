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
    "JdcTLsF7BZ2xtemcPsPqSXyPLYEzAhQ42edz6TBJBDxEr6B7FGmPeNXQX6jk6E7Xsog8MnmcJ1ZH277VNgguBL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35s9VsXP9avDYbL8HPSoHt8QvQVACzo84eYmPtfYdTry3DSaY7jZknfjckeT6C2o6k6qpvj7cd15oDv1EJ3HAVM1",
  "key1": "3zNkS7MZ6jXVKGHU8pVn6VLKHoEqB2FnHuwdKXfLv53S8KVMS5ZnwMCe3oeEFpSFYm1LxufGCKXGzQWuqo5o1P7A",
  "key2": "44bVEpQYth7cyFz5cdPh8Jh5E9W9P5ct8epteDW5Lz1qRw9uzykG3soZD93TkwCGV6jyi1oFgggo1RGDg2HzF8qk",
  "key3": "4w1gsYMYJkWpvTCBDnoW41ohSK72M6rV14NL1gxpMn1dNWBAEoqRFNVCNrP2VsKh6DW5PBjLtA93Z1VGRSGXRTeq",
  "key4": "4oVdnm5HH2qMyiJDLwv6SaV7P3VACuRxnvhy1YKUsMZ5N68ieq1CPeptQa3vvrkPCt48xGXyoyiN9H7fVRLVZWhJ",
  "key5": "nUjzqctgU5LfLTfSDXCsB12q9eSxdnLDKRBfW26qjvQjmxYYLAfPvGpfDLtiFMwqYF8AwEcZrPwfRv1SHJt59tM",
  "key6": "aaHKrEG2U7VKPEYiSzTSPkG7FnJTDxaAD4XVctzeeGR5kSuuChoJYoqxp7RJaWM6wwWmapvy6JaFSNbYJJ2NfkH",
  "key7": "67JdK8aTj5rDQdBX3RkgEivmrowhfEnjaCkJF1sDMyMUXA9uCENH9UMKqDyMUDD5CKZ48tAJR3fLNqmTcmjaHbpa",
  "key8": "4xToeyy2DtSrBmpJdwhaN7yutouUEnWwQvHXE9sk3Zcv76YL3qn5rhJhKFVaK3LoMMwwPXizaL5ddRJt45VSajMo",
  "key9": "5CPoSGfoUPTFELyZ42GLAzcM9BStFnWjFm2F5JotsLDQ77X5z45aUsKLjsQfswk7m51niQ2QBCRganDcZzQanmRF",
  "key10": "erv2WfwD88g9erBFSnrjvUSNNBVLdQrWp66UtSZi7Kpiw9ik8YzTiwhLXR1up86TyKNckAi4ggmrCAJdeVZPCDk",
  "key11": "2cgvHjahTU5Agt1NrQzmQFFTYAEpsFLb1hWNFe9UsAJVKyMAqQxd2cgPymqGrDZp3SQ76Bo19A4DARwcTixsjpNt",
  "key12": "3CavfMQioyWgGieqgw2CkgyDNYGNifuK3os8S9cKSHDPXSWf9KtkirALR7FjNXBQnfYFF56C1ZnnKwuNCpa9yCwi",
  "key13": "568VgcYCNXvX8v5gmAbT2VNStLqxPmvW5prQoeXt3Gh2PDGP52NiTajC12TW4TRQRYXmbzffrFjPkqCc2hHnKoU8",
  "key14": "32o2gaDHeDMkmgoAEhGpZh8ntWBdUj7uT6ARNM324VB2qQ6hv6SQFMJqdXpHjCKXQoZsyPfoh3gXAKM4KCNHELPq",
  "key15": "49VBdpPxopAm5zRfWiMxQSXx1HaSu6EBxTi7SzWydfknCkvR76Ciy3cMX6yBn2Y9ENW8dsFTDq6W6ppJaVhKmt1x",
  "key16": "4FLUWE3eiaX8ZQvm8aRAtxmHcAMxDv5YHPaiJSp2CE43SB8bB9CivaSn5oDotddb47YXzT17HpQ6V8zWqipc7t21",
  "key17": "j9MXwCVxQ9YsMd3ddoq5URWyM15JEMuYW5MruyXH7GYoUKe5K2T4rWcMunhFZd7w7ySeF1MpuWYGVheSTfk2FSw",
  "key18": "5XxWeKwhvZ3WqC9E9b6xk64EMYgtgkAYkRJrTrPzHssyr6Zg9fR1QafjkgzcVwqsvv6eYfVPPTLDR3ruXtZuzxur",
  "key19": "3wzLiQQPXxqiGqCeJNTYyZMocERoZpE8bYtmjnPtrAGarJQhnHr8dHZ1LAykRCjCQvYapSjKq3rBK3tyNjZckkQ3",
  "key20": "4L3YRJXK3LiG7cJysntbiy8oLjSxmAyDPXuo4Cot9khfks4oYUBJk6F9TxeMTVm7mDD6bwd2AeBMnMfFuBUKCXLn",
  "key21": "2H3ELReeqVxxmdEon2eeZaeHQQVroCoBUeH3FKydXv47vv5ypZ2TCm5R4EibAhaUnFugx7igny9mtv6gbGURSYyK",
  "key22": "2Pd5SKWMWe9JgDF6HcYrDVPwsWJKVJ548giXJHEE8uM48Fn1pZjgCYCK8m4E6c7BffXMVS7PqUqaAxM5s4eXopno",
  "key23": "41xhJMSJCcahisTGt7XSo7mtj4nVBGGitU9VAj4cTqp9UVG8ou5CBoVR9NVuQ7sJRT5LaenfzQ6j15UZps1rohxj",
  "key24": "PBi8r2WbfpeuFyCaSmebamKch2UCXGM8i73cWEBk7xtvkcAJq2v2nw54kF27hCjPNHHALYLEoWGHxoByEvvSpyA",
  "key25": "r8Suw22s1WskoGHWjsZdu9xZnanW1R1DtMxxrEp6xtUUKgWXTu7eMJonBA1Rdacv87SU3tCb73vMwSXR8ETumkR",
  "key26": "USmkJ9vYt5emZNqWiF64w7mKij17Vb7aFrDnTbW8kkzJuXeteE5gCT9pi18WKdfQebpSbFxmP6xE8Y6592YPX4S",
  "key27": "5pUxf3cMbkWFHDkY2fg3VDmPLE5ZJCUYyF84ufsXqTKG3VwpAM5TBtjJriQdZbT8vkWfVz7Txbw4kbxKgf9pfTDa",
  "key28": "5VpmwroEQzg1mVSa74eq4GRnS5woDQjxtPcqmi4SPV3QsZw8GENG13LsN4YjStzRhCE5Y4rc3yjNWdwXVxCTBP1h",
  "key29": "4C6aGpYZLt2tCfUSF9YwjBULU6xmuH5hzPunYQGw9chsFLMfVLKvNKt9s3UdxiiDjuW7TfHQELZnRNkfJA9HetP6",
  "key30": "39MWZP3aFbcgM9q1tRzGHJ3u4khXdYK1udXftxcLGVGXpJP3QbM9gMvvofyZpZWrw8i6wVdsqH4E5nJL2xdWDxor",
  "key31": "2dgboqCfvDvYr8hKkHNZrnaf2EF2s6UDx7bxnhu4pVNN3saBLkot2PsGNSmSQiUVSa173ESfYY7NncSkm8CpNG6Q",
  "key32": "4xo3m654xNSBjiTvaG72eu39Fw3PHAsiP7Lh5bvQuzAVDujjqLdmkwVsCBHm17cbZhSWE3EbF1iGeZmhqJU9kkbZ",
  "key33": "62Gxtc2HGn2MYRrPL71X65X3mDt6v3PBHSVZpNbP7o1CSdbMZ7ZzKUE6AtyoCjnySawKFGrPEJ2oGpEoHbQLdE3Z",
  "key34": "2xudKjQeTt5wgC3tVSvDA44Nnv9n33uLdFBYMEoDzHWFK9e9vqjBAJDfSt9nJiYX7H7xtTQtP416x4kGvFBPcCpq",
  "key35": "3JhWnBm5iww77abu2MTiDwRBQsuggWuxPhvZbeHdcoSELJthVxGuTcrLa2TPg429X49f5RiGs8AZ2USJo6f7honm",
  "key36": "tTTHYYHqH6MMEmEPJm1uTmiXLo6HgnXiQEbKjLni1UD5NhStgAL11sP1cRbceFmEW3D2aCGtxgZustVRMf9ddYV"
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
