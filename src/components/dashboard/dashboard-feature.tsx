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
    "3jzWiT4K88c3RM1KvjQ5ipkRvB1f2cQus4br3TXXVYufeYNXFxMqskpLDpTHZst5MqbregWpUPAJBwB4CFsFC2j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrxuK5WsLApPtNvqdRomdo4bMaCkjyC6JiHSac66gN7rAC7FzyyrMTEFduifGPMMVVaKDSvnBRmBF5Au7r9voSK",
  "key1": "4fcef1BC4a7wmaVEoNDS2Ut6f2s6PvThPdB55drxe75hHJ5eLbx9YgMJ7b4s8u1FwWQx681xZnqkCPNWFYxKyiRS",
  "key2": "5qLXXg54cBa1qmBuWfECVjM3bXuLNsB2ZFc8VBWRCzYenPT8bwPgVcEEFcmU9KPPCAkiH34PnLTiZ3CiSDkmBqDN",
  "key3": "wF3g5ib4bCxW1sJU1h7oRuiBvbqPbDq3gXUyEpvtikRmkZGZmrpZMkwBPdSZBK8Sxm5gUbTFdcLvVbTy5LGwbMb",
  "key4": "g1GEc2aiVcdCyCGQjhAUzqhJ5avuTpKWb9fSFtKxHfUTjm5tytdGKC4c5kNJS3snj175cwZBztjiYCXRVdYsviy",
  "key5": "BtR7mMfHCAy3Xi6REzh6tnBYYziJbTYMEQvEU2ES25xVMQdTMoRGyvn6svxoW6DNYhHqCncD5rFcRJJ2Kd9Ymto",
  "key6": "pkZpiqVFNTZdEVoWUydttTS46MQ3kqN2nNVYdheShYk1ihxSm71GgNA7jf5dZbxEzVXGGZgFtWQkpespzd4xTeg",
  "key7": "4Kuhit98GgkpjBryNLNtGyfnuu98iq6dDpG5Mt82CPqEj4pDzwhj96TZxMehPkWks5EF26dcBiQKbNeKbcSX7Ke7",
  "key8": "5cnkoUhGt1eBoK3znnqPor6LPEHqSuMPnnKKbKGNxVDfASzncapsmDgTGdsq6LQgvnY5YxYPa19BKkgkCgHvjstt",
  "key9": "44xTtzLSNdKCmhh58TAo8BPUhPPVdpKpfYpf2MNEQmDvLG5Z4MASjiXMxiQ7QBHTqCezZTryVcyHoREGiekBUN3D",
  "key10": "3epTiCCRRb38zMfCHXyKFjku5KboxW4vwcEfwHRqe11EQvy6oBY36EJ2Yq5bTUc1iZn1iLSddi1rHLF4qtwhG7TC",
  "key11": "3AFn8vrNN6cMuyC1sR6njKjLn288BTt6nrE3QoWNaeZYLwHxTWkjAgRSSGgzfRVBb4gmWMzSL65183gY9dwxUEKT",
  "key12": "5mW4ZJajFdiXspcNYAgcxVDpLWJfuFb5xouRJveYLSUy8FYRbvLrwq1tBvWwK5mJcftNmYfAvUCokL8i6AyfsCaR",
  "key13": "4mcaskEwpfqKXdfiXDjcnPwZsweyodZBcZk3CVwc7kRDmigZGPB4XkpiQJ3R4b8rvTKpzzdaDZLzbUX7VPC4EwKr",
  "key14": "4Ndvo8FXA4kCntQxwmKzcf8EzZC3tWYkgAmjbLvTeJJsgXjXkgkWR2A7p1VeMq2dgMZsfmQXUiHzw7xFFNRWnXor",
  "key15": "2UDwWGmoW3DtUhrYyR35FEU8xcZdMZgYzyzsZoR5zTSa6fSPHQbSzcpakW1MGywti4UGqEFm6XrjPxpjP46wcFuz",
  "key16": "2L8EqxmR28G5dc1LvjLE8yAAy9AQFzvf51BEemBNXuNnAt2YM2Y5XCCBbtZpv6kZkkx2DMPyS8p3YiGybecUbXMz",
  "key17": "5461H5uVwQGk9kE7FiiVZKjKo5LqqJ2HB3Spo5GRh1Yy127K47GCZXDvH1GMeGKEnrjS6eyNsvJPy1MgBwHYG5J7",
  "key18": "3yCxQMjjXLD17K8fwZtq4A2pjWe84DpwwY9jEnNL94z7D8oKqc5uL9FwNucBCYBHzCNEUzdDXYeSS3XPpMgk9sgd",
  "key19": "3b8dt6mgrdMRjFkTeApDCiLSXRTavVbk8u8CdwkEU7vfagc8HxmKzweWqVj9v5D84DzbuLivi7pVYbsqrN316ifi",
  "key20": "3XL5XsWWPi4vbecjAXYpd55jm2HeQNpdzCYWaGixeiXXCUMMQHZrLeWpM1J6nyrzgdcUQ3zjCoov2ngrDevZnbGv",
  "key21": "3DjqmkA5A6R2BYDsD7asGLuRHHdPA36hkTaHgZN1sN23n92Fx7cZUoLk5huYoNRszpTcDw3QGiFYu3uq496apGnS",
  "key22": "sgL1eTADoEEZN18TPfiTKxkXQC7mRCyxXGFe11kCZ18Lbf8FNPKVoYEhPdk25tgzniSMXUDAVHRkdEn1k4nFXDU",
  "key23": "2WWzc1k8EaFeVSZtda7jBrMjmUaaWVfaYwzAZmbZ9Cz5fuH36XMdjsP2cVuHgNXxhYcRkKBqNGcCrUBgh3h2dYVE",
  "key24": "2d4RPhSnHDdkVpU5ftwB88cCXcySo78qgRDDMttZPgKKMWqgoTtPVgH5yKdiWjFQLLQv8x6J4f5DcuzrPqSNA4ky",
  "key25": "29ncRfaMjwP9PsdgivrQeVddeydGWyTqwpZ3LQg1kuzzXoMgd27bN1ktL1j1SRLyLoKAgBcSuftVTGf6vuaSvHGL",
  "key26": "4QhBm3yNDA3gYoVYgYNMisfdZovjxbVyztaneKd6dyJXXNofbGfNZqaAP4MffFvty8h6p5JcjusYZiDvAooutwyD",
  "key27": "3ANMXrSiaJQUTotqPoHnrChJ6fkV5sETQcd9wsqhi2uEQqq1xXhWEdp3powuNX5Tebqqan6aKCyD6deRBZM8xPy5",
  "key28": "d27WUZZk8eYTdvFXz7XopT7QCdSGVn5GDvvaGiVtfkjAKiaqre8goYd25v4eXTGg1SHnj2NAnUZgsp1nMLaoxUj",
  "key29": "4Ysn6z7pxHxc3y7oZzZtYsyNUTubgGPTgn6UWuqaJtF59ZaQcwMC9u1x8VmEN1QgEWCUUTz3D3ZTBofiiLMrvzNt",
  "key30": "2dxzkqk2ajkff9nuMNYx9GH8CdW4zea5xPXk47MPs1JdH24KqydjQf8EjDzskzQY96GzsWqXs7k1Ftaae9C83oKd"
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
