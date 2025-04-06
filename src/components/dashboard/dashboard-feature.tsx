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
    "fM3saNgXTU1NvKYGZP3YUwHTKXK9EMuR6mhWvxJbAfJLwnS1BZti3rG5JWee6471iLje81F3oGVQ9XxAk7ERFJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfQ73vyZ5PqxXJ9xhRBjxC6vAt5JeLrihRv7NNjjMpRQkR8SkpCTpPMbiPczi5vxVddvYGkEHv8Jzjk3JxyieEq",
  "key1": "5jwTv6arZcTgpWKuU2Quvijz1gwRgk5ueMMD6GeeAJ15dBJ78KYUzAn8cg6DL6NTYv8EDmL5MMxZPTcSC59HWews",
  "key2": "83JiPHJ9PabsVchS95DzJeBUmuyke3LGtikcx2YVnhkj2tvuo1xJo2Rr6HobfHq2wPTfYbccQP9Nv1RW7vDVbin",
  "key3": "vs7AC7vokNNgFAJtzEwd355kTcCPNKmaHPPFpjMvZcvZFmAoMLPvrP2NeGvWnm6Jpdf3GikzbzZ2QwscjqGkwEx",
  "key4": "2PLXp8YHk2uLvvABhms6zArhUfjJ5iX6Mt7soeSPkbcnx4Lbu4HSrUZe7bGYZ8efzykdbXmKJXr24KkQyNK6kEqe",
  "key5": "4vHjiaBTngN7Yi6feCZhbf4JtkVbjunMPj6mDo4TuPAyeRNm51JzeE3eFp662zXaspHdbzfaDuhhRNQusqvvvsVi",
  "key6": "2aG7YckDPtYEkMtiyN16LdtsBohb5Vop39k1gZs4dddUue413ccN7AZFgccHqfQwh51qCXHJfsBKNrvaQ7S3aWBh",
  "key7": "5WWCSSNpESykdpZ5jczayTrySMviUkcRWvVrgkHDpmkFockcRrbyK1VT7uVrUERv5WCBT3XPwtuxtnZjKdkTqBCA",
  "key8": "4fx7Z6Me6w9Scdb9Acj4gHQbBrecaQFEAwCVGnYecj8w9RxxdV4JTSFTu1QVQo7aNnYicczcBU65zuu3Kv6jSpP1",
  "key9": "5i67DnYDYZMH5AoPpugpTEZnfZKQEYWpxPGFKujqnFev2CVCJHhycQems89YAEbcPyQdkCyqcfmkh77TjK8Jq7o6",
  "key10": "2caP4qceYLiDkqXCUVXRuM9a3Vm7AiqPAD2d9gt5bZXzhExg5Sqxw8hamrKvAA2UjR61CTwwN5BtmCo6z2wruxU9",
  "key11": "3PMUuQevJErT5LCte9sWyMY72wzXVCBZhcHjRENUmzcguXgCV7tKTaiTXQW9bUD2BSwrnskMe5fihdkiekAV3C2M",
  "key12": "NmqgB62thRCJ2MTtfQAjHFghvBui3qwCzibkA6qXHStps8WwBE1mBSENS3ByA3oLZUAUobQwaBLKsgmEAXJypJg",
  "key13": "58u36dzWHU4nb6AJgTw4maMxGecTkvwEJtt8tHMJ6Ky6F8hKjDmQ9Us5ZnWxPbZEzJhLQqQX26cVXrXeU7k1C6bZ",
  "key14": "4M4GNrgtpaV867RR6LFduL9Qs7MnhWWor5DGJV4gBeFKuWoZUK5LbLndwKHku3PhGYVADGDLWdQxKWZzZQzZwpX9",
  "key15": "2LmtaZgCdgz1g1zWiUvW4R11PAschwFiSWLsDB8Gb6WLdpccnHWVNV5UCo1y6QpvKsEYtSXdJaPKhJ2zfhiPdKTT",
  "key16": "4a5Ug9gGiXFTjw1BJqMcCGPmMbFCysgUiovF7kqtKPTuGXDLEbMuV9o9Ey8VoFZVEYMURKVqomeKdVMUmL6pqL9X",
  "key17": "ihG2ZhKyGNzmkCWt4sFTCgkTyiqSucH8HC8KgE6sjkci5WSGvHoDAHhjbJJpDrr5c82KcSjpCvn6A5Z879jSr48",
  "key18": "4CknERN5b4LMWh3xXnuiBYBoAGjzpQubzmZTKwJwyhQkSKeKvT2JyhVPZNsDCmVzWYMbbJ33yrctDvWDmww8pMWh",
  "key19": "3WNAkdTLELRwUxk83tyEa2qARQUdsZXRjP3RheRYKJCHzf2ftcwb6WAheVA144viQygR3USjZnWxWHWFbTMVfSYd",
  "key20": "3ooovMobAenMHCaFQm72oMKj1VgzeeK3KH4Ww6ELXqtmQinNLjSxmtxtVUkcpsLqkp6HC9N8Qnx5SrhgNchG8R2V",
  "key21": "2T8GrvwK8SKQM7iHDBgWyYb3ao6sQ8sbj6UfmPiLmmKXURegL69P1Sio3SqtDb1nwf4pBvTQAjP1UNMXZYiiCdtk",
  "key22": "3QzhvTMbuBTTLDAGTaMDt8QhtPY7c3DuNWUHrU9byKgti3283DTEJoLTQ3i7G2VMi1Vj91FvFNFQ8qCzrTZXT6ow",
  "key23": "4tcGSmeYaVkv9fT2wKyeBZiwymzqGUv8uBcDHNTGTGkdBSuq6EonPxfsKRy3NeQj7qcsXNkKFRebwRQ4CPT5vyxr",
  "key24": "3MD2fFtAPvd3z8T2WWrs6Xg9wm7ksbgExjZfPynvGjJsBQARoTUtQ63no7vr6oyePudj4nQv6djtYfDv6EDozLHL",
  "key25": "3a1JmFDY8VrfgjYVNiHe3vHUtwguwfZ3q2RMAuaQkVDNX1jgeFkCBkQrEVpSGdA5KMw41o1CocAqvXjzVdTz75Sv",
  "key26": "4VDCb2hnh7TJB3AqbsAsbFkAQ7sHHmpwCD5udDwCUin4qkKLPQMxeUoYrEioGDkeaMU3zz7nFPPiVnTmspEMbevk",
  "key27": "59qypVwB9gMSzcYjpUW94ky5HY8JT6vLnkuQDw6PDFi3u7gsM9pF38nghjqfPVMUP1biPESVajssrA49PgweaEbR",
  "key28": "3uLHreVH2sW9FcV4DdC8WcHyGAtn2mXVTC27S1jWQWnr1STqKdutqQsqC34ePH8He6S8qZKpkr2tsNP6eZEmy4Ae"
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
