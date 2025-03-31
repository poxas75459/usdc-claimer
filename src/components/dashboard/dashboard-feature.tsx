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
    "2u4Wy57tRz3cxUa6phkn4VaSw8cL8GoVKQuYiaRgFQ2AjNrmp758zAyzY4wSKqnPCSvEMDN1wSz1mm8pb5gJAQo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUKieVhD89kj8uao5WA9HgfXFQfjN5552UXpcFGYsBMDFhHLz3tPYe4RCF2LCAHqG8dgK5AdTRw1bEbCfBD3n5L",
  "key1": "2sDY7US6TKfM53y3k5c2x1SrvhvbyGsBkxMWu13TvzbB65yVq2e3xZdMhbznwx6CgjjSnFH2aY6uiJWUZ6ak5m6o",
  "key2": "P4EbsCLKZ7QMSLDZ65DkMjz1GZJKBfb5cmLrB533UdzcV3eoitJtFSRB93eP2oZiozVK4f975C58cwoUDAmUNPb",
  "key3": "423gEoGCe96DpwE7pvgiB2V6374xoLN4CeEvGr7r6YbF1ZkfwSUJsMj4to3pEuQvhdbpBxRJM8H2yajFtDxCsttP",
  "key4": "4gsKKDDBPo1n1H2ra7dH4G12EYzbBo7W3Z4vHghjY9hkt4ABY2ocT7uxBNi6ELCBFHT5NAeQUYGxRBYYZHmJM8Sh",
  "key5": "4xZ6tyuV4sCfzT2gh9AoHq2TwTGrmVEK1N5MvvFRMmJKTcyBPMgfFqc4Z8Qsfr1CHUSr67GGTMckhDUVEoKhtJ1m",
  "key6": "57UpVW7ggdx39Eh8tU36qXowjnNsAYGBdyG5g3mQkU2MRvGEqJRiMdWiw2MG9iwriuG9jeJqNaQNfyffRZwW9wy2",
  "key7": "29b88PaBpeZYYEj8P3LkFZzpMQYi3Uzg5xB2QfydwUdcD8djuDcJxCSLDs1vyKF3dFGCZKV381cpC6is3UvDQGxC",
  "key8": "5ujUck4KSAy7tepSEXHw2gC3EJJRG5A7egRnSDk2j7c9hAiEruf4m3JHM9Wq7S22cefabuXm71PNRAAQYw7SjC33",
  "key9": "4LTCzC4Nd7cT9NSjy31BjBL6ceXDEGSEH1jUSHTnKcjHPsroKmXW1fSwYRkjWiBWaZc3t2Ff1GVaLb216gpiLujs",
  "key10": "5jNxuiih5STC1k7b32bs5G4CvCgcTDt6f16fmNjkGFv3x7KQ9todygh4XJ49GtKePLyx4yUAhpC3LLRTmyfLTEja",
  "key11": "3wpn59r1Fjufx2ipaC78pfG5B8moYK6GrY3eYbYnFi4pjVF7btyWYjDpdmoWqhJgwxWBceQ7wahExunnoTyFs6ER",
  "key12": "51vx1QoGTKNyBTpBbihcFjFxhrz2YKmbuoAhtkHkSiH4D98hspZezox5yqMwTqpKpjjeXLJt6EjerZtMKRLH6KKW",
  "key13": "3Eh5VmTmEVtTMY3mBt8D75tXKJRnr7Lri7mWW4tXKfamLfeZQwCLDvCJSia6qMuu8UZQz8in9fhWF4s8Fq2pdRPE",
  "key14": "2XAb2rKSqAbZ27Cs8cEkqZeD3SEMSK3GNyJgqUn7qBWKesVFi3d5ueLQLG6vZJE5Z1DTjFfo4W36FMZyCtofL4Ni",
  "key15": "4gis5KYoQxCRs94qDfm7DH7wY3jb3DbsaHgY4AH6KZrfdpeRS9h4DB5pgzhCj5Gna7zXLH81BLXxdF1rRd487yz7",
  "key16": "63REm4YwWVSN5tdYVdC2QfiqpWCMzKTBpJ1XAv7DABad4ToXippsVfms7dEtVVXWEDcqjDUH7DAW5kzTYzE9LYmj",
  "key17": "5gxcvthPTJmJzWfF1uWAKBsfBTr2HN3u1mmWwFBmUTBBMQtJrf53mPTcNhQiyGgqjJPd96U3Bh7nwvXYRCQH62gn",
  "key18": "2ptCeJk9VgpKDetmpaNxYx7CquMzQnFvqBvHY2ncGuvhcVGHQnRP1217m6gMjYvTEM3z1ixkaLEphSvaQxTSVtev",
  "key19": "3hkXfZPhAtRZXbaSPDj9fm9cJg93wAzh1ndUEfcrj6n9oECXknFg21rHXUGMc8gVAkzNTtufF8MpQBL1fXeV34MZ",
  "key20": "597ygUiDjiBhaixpunHheEDSLREYmtcJeHxKXmavccSwwSMR5ewD1RwtUYTA3YMeLUUZkA8xKv3T2Qkp4rSAjcVo",
  "key21": "3EWAh79hxAGzpFKKpYprcyBDz6He9oApjrU9TUzJoiw8qQCoSYwAuSgpQdeTvg4rx3vVY8J9N41PJs5trsNzykHk",
  "key22": "3Kp7LjKWSoUwVeLUpr9267BvqYfqpJCMkPJyMoik6TFeV4jMUReYWkzd31zUtNFJavoSn6Pi7Gu6DXSUfxjkg7zc",
  "key23": "287PKiTKAkY83xgHz28PST3xVWJskN9WvgYzYqx6gaMj2qawY9ZyEL1v2cUenPZCz9sgwkUjHSaA9o5P85uBC8vF",
  "key24": "37b9obpHCmm5K2nFACs1ngcGFmPyyNRuijAGjUcTVLsMbtVn4aCPyDyyRdt5FYDNUzbg8AoP8jYtXAa81orT2oXR",
  "key25": "4UeDnW7BaWENaw5umsjvvfgN6csyiDyswyGPCSV4bqkoPtgZSZzkGjEgvgjTbauNQTg8tKjqzGMgkACZEctGDRTq",
  "key26": "DTMPTX9o2iE9E4UQvNbS3Mt6gCzC6riqYF4GfQx7zMbTPNzTzGB1tB2Kv566Y6h5eHfU2bqxcmnbQky26fkLiPY",
  "key27": "39PfWMnJ5vSmD8CtRAVRbyhBdDXEBumYBVzV2cxmR1W36XxPeUHbRuXpP3v67rXbaipTgYakmCELjt2cNXo57xk7",
  "key28": "2dije1m2U7WjbDwjXFsX21M351ePRUiDU2s8YpFjXnwiBGw2dGDweEWF8c8iX5YopgNgUuyBpJffQq89otdnBx6f",
  "key29": "3KSs5S84U4hrgtLUs6Ks8eCamtQXwXETzBTd2PioBDaXKTibuqoqnZ2CmwxkuZuq7FSNYAHnCpYKe4PMpwpFhr1Z",
  "key30": "4zurMPCCwETShxPJ8pW5XcA8LGaKxj38sw8CSq71pFL51yFpyf3FWZ1DTucRo9rtnxkRUisQyVqoooRvvLUQThRK",
  "key31": "3qSqc2SvMCUmDuXTbcBdmqVyWicHJGwuSddiDJ374XCuYbuPJYEq2EFqtBMv4QiWXzzq92NJexRAVkBqykPSQVDG",
  "key32": "5nuLN5e8pdFSpGdz4sW7NEBaXRU95eC93YjAWx2k4XsLn15u8VmBBDptXkR9qxC1U3NTjZoKU5HG9HD4PsgCeggk",
  "key33": "3rupWzRRV2wmUMfu2FCKnYGuFvJq4MYimnAuxp6SaMWszZjr9HkhGiGC3HvFK7EVvmXJG6HH9fCaBsMy4B8hUBTU",
  "key34": "tvWdM62LZZ4MsnDFtz9xmCwM3GkczdUzBkgEAV6bF5Z7FzS8Af9mpzTCe1YpivcLENcZ6MuzWhSgPfeT556Mkge",
  "key35": "3PvWi7UT853xZy56Zm7wjsMnYvfmmtEMxzM6w6vgoxd2AhUvuG36zaRXui8rrRJLLGHjYNyiCx6X4cP3BWLs2oxL",
  "key36": "45WcTtG3nuwFsQGPEohzbATTEJbfGa83iAauQgCHF2imfFsTqjWndE85CnViKhAcvcvAZRwK6p5iocXbpgJm3bcB",
  "key37": "2ac3GKzgbjktTJvKBm2FqojYKrifQqaNwQeLFLaJdTEiqHF66tK4LMY6aiEf2htsCu4YgDzfAuWWN91R7Cy2pmzP",
  "key38": "3ZvnQfchfnuBkY84xUaKJ5jUndNMsiqRDFoiaF6NMEVKEvB4VFzqKWtDHsFBiAMsWMUZGv8G2pQHDzw8NA5hnGsW",
  "key39": "3f3FeSULcBwYrGNNERE9X1TkqNpRMW7p885csFbj2PHNu9nCDzMvqi8yQChyx8SnTgseMa6ac1YhjC77EqnTJq24",
  "key40": "59UJcpuewXVb1ZhcPdHzco2m6cQz15v7TZk9U5eDPdZPwzqfM9wMMJiknXGhHpyyqtrrivgFRkKYFeBTsV1woVm4",
  "key41": "2sF4VdfrkDSJu4AtyHY2GhhFucY2WHas3RMZP3VqbcjLyehwNKqK7YqH5VHGZYNKuBZdHM2p6KSyRkARia1J2tcR",
  "key42": "aMb4LdjoqwwP9817a5nE3JWgGmrSjxk6CUBYjdZKRPcYSL3jikVCm2Rus4UrHa9cArjQ7MGhvBT2dbBcUEMco3A",
  "key43": "3M5MUuWHv98Qe24CBvu3WsrCC9PFJgzetEWhuDzdgQ4t17ah3CttNNF6E61ttRwgBu824tnHJpd71j1T1TL4UHY",
  "key44": "8cTr1u5heB3BmAB443iaCZYyibkM8AWtjsLVNh9qusbWhfAx5YJxQVBMubqLq36CRiDfnCP6TQHizvxZsCxd9pQ",
  "key45": "5qevbHYWMUQeSbjwGgwBNkGUAvSaARgLoKMWoWvVvfNwZGY5ZDAAVDsQRnY9y3bSX1CMtw3733VBZgQgPpg91V5m",
  "key46": "5Tj1ZxbBDfQNxJrx7zH4ssx9spRN28vpCrhkPNUMVBVZaazQQmjrzLTbgHuk2d4Q1YMxC7N2gthUWAEbaeg4W2pK",
  "key47": "5oFMajH2nGYPdUfpG91m1B6uUpB7Kw3W6yHf712VronKiNvXDmdWechsbQ89aXuCGvF7XTGrbNfcxBNWWn66PxTF",
  "key48": "3Ww2q89LnAoCLSh2CzHUKfeDF5i5GuF34BCAvu2JusVkBn7nzodJF6QZSYetbh1GrbfMNa7KiU13U1dBKjvytwXh"
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
