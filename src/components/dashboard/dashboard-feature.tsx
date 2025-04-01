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
    "2kvh5pfSf9wH1rwCj3K5ZT1CLSk8h15dKKW8pSiNS8z2ceBkAZJ3PXyvmb1kDyVk2VrgbNDzsQioc923318Z3oz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7H1EEuQgJQwuJ9MoGxfFXFLEuDY14zyejUaBC6QNG2E8QAcgYCs9sgAK191trYGQYQCzeWPP7t6DFTe49VBbqPo",
  "key1": "2KxcL1S1CxaANsQwh5ZMpXrfw7h6NUd3Sk4FKM3dQZgp1Jq5QA4VE1VnLKHUzLBg9RGNXhzS2gNxY3ZZLpWekbuy",
  "key2": "36eQUoXTVcZ8jGxKmP3D5xu2ujqrdkaQzwn8TV8a2Uq4TdE8aWuCpaZAYqLmMHTg6ZJ4RUrbgvEF1JuDx85STPN7",
  "key3": "4Tn1t9UpUgtipGuVhCgLqu7SqtD9Ru4H19oToYD719W3i9p6bt6dpymtoedb5qGy8KptVYFDwiE1KqcHQT6Zpjn6",
  "key4": "3AC5D3FsYV9dUy4LmceTKNAAGq583DTMDZKY9FMVzFY9c6XooAr5nP5eDeKgLaXmW9iGMAAEVsFSyvnvjnEyo5Qb",
  "key5": "5AUDtX2cvsEs7rigY7bPzu8a9YpQxTBEyskX1A44LELAEg4hGqpuTJMtYvffT565uWxdmvn4iTxGnjkztiDhtRVx",
  "key6": "32oKZaRYK8AEWFksohaQifF3fDnHB2JbX4H1JL3LP7a1KuaJXCPNoiW7UkGhcsYURjbPTKrEpYp4FPtvMYjpc9Wj",
  "key7": "253D1SEdpr5ZD7Ubj3BqGAnJVgSHnofGRdjkWW6EiSqPoviLYPvFGgtW5hgVHjzDrnJvmJaZZ4m68bHTGADZMYTo",
  "key8": "2Mjb46n7oepnVk6iBVfUHFifbg8c9sddL6SYKJgsQzMcZ3LbvTh1a6n763JRuWcqRDQgqDzVvPPLyyXZmYgSkRLi",
  "key9": "658XrkYoQC4QDj3DmNLGhxucEm8YBsnGb7L9GqnJkoX1uaF3HQkZUftULVCrNfTs7fyVMp69ndj4oH1YYf2ZXf3e",
  "key10": "2Br3LMFGPScXgue3PoHNvfivzJwjVdyZ1SCaBUwExvn6vEajeXB45PVJnpLmext5rp5BM2h3UN69zrRHgnPd1nJ3",
  "key11": "4K5fvEMucDPaF4CM9thREQJvxKXV1M169MNThZXYYbwbbfAZtFUdWU4Qn1aDSukSpnyyzRpNwkxBV4gto6wsy25L",
  "key12": "4EhqFXKhqe52ft6XxD6XEYjuiGZkpndwXpzs3teBdDj1UYHHAnG3E6bdCW2W8qsHQQ172f6ZMDpTksN4w2WMhmzJ",
  "key13": "4btqhYWAJGTWZqBqjsZ973JvMmnUfNKdvn5XgSHniwYvMqsWtbFpPaY5uzihvq9md4DMHUCofStaVmif7H1so7rb",
  "key14": "3Dg2Z7HX6Bcs6smzisdaURupviiRqRPRDBMfohHoqtFeUdQn1SVkBHH4YtM7jCbBfTtQb9mc3UWfvjh8SgEj9FtA",
  "key15": "26SbZVMsv4c2KvWbYv6wtzwQ9tRnC2PgnwTArSgWcPc1a7Yrb8qpKuuLEaERZ3vi4oLf5HxCS4CQKR8CQbvhBicq",
  "key16": "5TSDVMnCgeH7pLbeL4PKgP81oUcMHoCTCNrhYK1pTMjLcEHcsE88ARzJN3vsfVmcvorofCBKJ2ESP3qUjneKPzbx",
  "key17": "463m9fTtPHzZ5Zf1b34RrYjqeojJt1qvBDKVEDWiJtDcVijYQGPo8s4NwwvB348SySDZCUS8cyXUWGY84CKo78c8",
  "key18": "2pnC7VVbzNercHiUY38USicDF5bQ6tv2JXrusDtE1Jrm6T2kaXWu7D8mspJZJeajJF9NLLvo9wmfZ2z8vQkdxYfB",
  "key19": "2Gn4fSiADPKpZHSkqgGqsrvTt2R7HkEHFvcnNzafKobLibC9BWqQsgZdmUiCDpnpqwEwZbxyAMzBaNtqz8aim9qR",
  "key20": "3DcsMLTTTQ5vB1mzUd6KU4bFu7f2GQn1Jjf1XRAw2UaHNbKueht4XKuPVV7QMHbaneC8Ceo9MJnebMhLHbpTGjXU",
  "key21": "4pEKEGC4qBumKB48tRNZEzBXS5r6RPmcYdBBF2vQJdgK5ASF8n1QcnGH9uL4ev6iP1P76qbv5TGxk16tQHj7yzEh",
  "key22": "5hSLZwLJwRwxCRGemVvEMSrySxFCJiP3TCRuWwNLCia7WsZAP2pXR6hDyZVCWuDfMZGtBzXvutcAxCroPKb5jHoh",
  "key23": "tVeX3nsU3Bt8g9LJ87LN5eKHjU7QPo7x1J4DSjdQZn23DhZ5ApXi26w846xAG81MqK8eeNjY57SQzenbF8hzNVv",
  "key24": "26uxkHEqFCFzg26Ge4jSvaZ2s3FHp65GHJ5HLn6vPf84qVNdxX4fAWASLkYyh8PLmDx7uw7fPiw3LDhjdr3Deytp",
  "key25": "3bDHnfqs5zZdBkD8VFN5jeuMG3ZHmzPYo3PmZsEyo51u32WkZTeWQftspZUNWUxzYHQenQnm268j8QKK56z5Mvhp",
  "key26": "FtW9SfBSej3X2AGpFRvuti1bmMts9D4uFHeYhA56PHYAe3yVpvTfH36nnbbgte6Z7cjPWVgox9D51a2nHczbyjF",
  "key27": "5y9LGYx1ysi6Uo5fDbijg8cFh8BY9VfhWSa91X1bNmnEgcChBVPFGsbeDnPhgx7zypmoBsVLzBK8AxBkyFAgiYbN",
  "key28": "3PjCFCne9aiE7LViZ8AN1Wxh49Ke2fDMwqw6t5pH6odCdqSgLFdmRVVxf3egwjnkH681fPBQopVK5Jdfc5ujp3gq",
  "key29": "4t4NjcWfSBBmjPXLGPsrYWfeo7YA3QGW7HtzGoqkvype8Csr3LD7TeQcr12hMZNtqc1SvRu5FJXXB84bUfvyN7e2",
  "key30": "5Asfs3GzLd8j7q4RGYftTK3KG3oVLMhSwwhgJ7VfMEbgPJK2xWNwfBpd9nUZUDpiv923jh9x5QRQnymGMyGrm7zn",
  "key31": "5XFj1t4LKzqvSd1bV2uub118fU4w9e8QBN5CAewZrRwmyHxqEdroEgPjoj2VRgxLkZTWUnReGB35dxsZ7y7xVHiq",
  "key32": "2N4gJiVyYZrMmMReZmT9RQo7nJQTQkgq6L1NtujtXrc4q4sJagk5XU6LPb3wTi1xcz4wZNsYyyeE3ozsREHeimnE",
  "key33": "QQ2ceTZnrZi81HP5oZJKeuSofWkhTJi27GvPymxnDzpxHJThUxdXWH3bwqNBk9WThqWKDTDR2HG1zp7dKXhapwE",
  "key34": "5PCJDCDk53M8DQBjSRnU4QxnqYgavkPufD4Qx6PXxdXm8AP3mB2enhAuJrvAuL5mmPUfrZhFobifzq8rJHPAZSfa",
  "key35": "4GSBCBtj8JRDP5KXUo2bXDs7bcVAGshKrrmUbf9PajAoiiQZVU8oagpwjKkqfvk8g49Dk36Cy7RwYZ4NvoMmDULs",
  "key36": "54Qxb5ZWfAKr899Gx3f1o2KU7oLiYWMvBzEnmy3dmRdK6RX9hcba2uanzxtunAqhd4u42rprX7NpvV3uefbopUfN",
  "key37": "4zUUCicgooXY2eHFGxi2MUSaqGG8J7Hpmx4EU9jwSjNLMiSf8kNttvMLWKAzfy43TeupPvxF34QBpGqk218fang4",
  "key38": "31n2pWWu2tpaP428xPoCbQrNYV2xpbV8AHyUoQyGW89kfh3su7RbT8DjWGk2P1ZYe3aB8RoHrzfEyw2ixTSUoohu"
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
