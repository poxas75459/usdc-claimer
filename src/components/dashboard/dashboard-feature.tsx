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
    "4As14iAzFK8NGNYKRuGsqomW4tYx87itrrZPDLjesySuB5phu5rfvpGNMxjx3a9PhcpiULmZxvjaM5VwPG8zC8F8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzuqRZTUcv3HY8Z15W5AbDUyt7VzdZPszXu2ZbbyJCNfn2pWTBGzUMZr4PCyf8Wwr8ytRPx1HpCzCtR6RVpWGaw",
  "key1": "49be1T3ZH8h5bAAmst1y7atKBDsbx2Zmb8Q4btGhm47QeeQFZKhkRo6YZcQbKNPGy6n5m7vBJ87h7L9vvFAJ2gGQ",
  "key2": "2iyCCEaJ4Zwupyy99b9PiPYomkczhNRQFM6VtXxjNDtgzG9QEBW9NEDXVUFF8PyFBmYLrfwKh9bm689cs1LA7kyL",
  "key3": "5wsVGriP9mDsYMUu6NUvhb97paRy2WkJSoDAfJb99MQ1ju6quWuuQMipinozJpmYyuDSR7zekH1yw1hZmXhaWcm2",
  "key4": "5pypXf56iagT3pcdGqmEMjjJs48sjRwjiwznyniZ7MjwGag9MnP5zbyAEideyXFbLsE4FLKrauASv8VWHHvczBmd",
  "key5": "Lxt7k8EyzekhSnKQYpCEF9kWbtWScbd5Pvguowb4reoQ6mw8aVX1kJtZH31xdxyPHPEmWKRiCgoDhAYBw8qj4U4",
  "key6": "3BrBSfrMEbc8DKQDSCtrVb4cLLKLbUfesak125NS3soauaiz73avG3WbiMz7qx8qfwCsgMKjYbsZMTA9LjdnRhKb",
  "key7": "4be2M9K5F2uD7QJvDTR51YwgUeV3BiQqWbu1t6qxawY9NUwDs2C1QDH1uxwrDn4sqXkBx8sP2uQtC1gqAoutU5Ss",
  "key8": "4wB8nKPMpm1qeZTsJGb5FtpAdU9SRUPs3JH1SbJdARq6dzz7zGQL666ZgaLkMfoLHxGW1gHozi5k7ZBaVC5U4fCu",
  "key9": "56ur3qp1bc6P2f7sqjwtWfVbau6sn9ddrV4eZYRBSY1NdN7VhVxVZrhY5qSgeqwvg3PK9WfFno7bYW2Jkud5EeC7",
  "key10": "1KRKA7JHC5S5Wt4rsbEBpfbyG17i2chHntU6sAZFcHrvYtJFZP7KqDLJricbhZASQD33dDcaoyBcy3jK1Xnnv5e",
  "key11": "2BWXtg55bTj57zy2GDEBn8tP28PnWppK9PZqcuRzi7Q5UJ1yKfdhhav5zZd4Fc3Z2wrrR8Yau3bycA1n1fwRSAsY",
  "key12": "3fkriqGxdka62y24kep1H2qyaxGPfzCmyjR9XDtq8KcB4dEegfGcgnsc7mA1QLQKMJvVHsWzkccJocoirFvPirWK",
  "key13": "5xUuAWufBiMLoeYW6uGUcUk31qFknvCM3dn9Dp6n6gF3bBrtSuPViMb9brdbMxyLnhb8rcnvHsqt7nKB8Gbncw3S",
  "key14": "5hiyJ4Eu1mgTSNSUacLeasAcv7t3fe3s97z8gdEW9xhco3TMFc9taZuMozXwubJA6Vmz6hCHTaxoFdKifZkvHgLh",
  "key15": "VfZMwHzz9L5rFWvywpDn1sS7Hv734g3wqzKspmZKfpA7oycAMNtd63TM1dRFEbfNrLYPE9XBwQ9CJxAnzzAgjFm",
  "key16": "4igDu1DUYEsQdsWRDhMxPYjfXdMNyFHydXAAmTUHMLhPJUcad3SpDMTGXr1LjMA9n9umCgv6dc8Wcc26LRjsLKyw",
  "key17": "5zxMsc7fMdFpZPHcXzL7iH9B5SojZsEGgrgibaZCcPfcXCdTXG1A98FinvvYcoMpY1Z7ypuYivWLMPUib5YUCfmb",
  "key18": "2bV8Wzc7ib9YCwgah628QvUXEHYMfFzJa6EjM1C4J5aDEFjamjd3LvwMG2q8CW9dRjFq4LX1sMdRrHcw5Q8dkazW",
  "key19": "4yzqujuCHUFkp68B7yKatLPMyEg7XrrqphccSELu75cxp1sGqiPdr3To6Ymkgw9ny8QLhNTEGGG3e2Ks4EQF2mPP",
  "key20": "48xYzQMREQvMZ1hdodapzWK839tkGu8opnHobDAH9wD7LaM6MGdAW7LdwN6zzGFUPsr1Up7APyk9rdXvAB21VRV3",
  "key21": "UoKoxgacKzMEtEFi9jzESuRb5kSX83uY4pxywXDuKMt7HqY67nNrikEHoLf9mFqdJAk264ZQFcRvbvYvWLz3E8w",
  "key22": "2kz8eVegX6dJvUEBVV1XYMC133vFGW3UnhDUQg2efnPNXubx17Jui2hjMc7AKigGdfNF6rKkNbeQ4bEa4a8dXZSx",
  "key23": "pzJXaS55ZFpqoi9AnK1YYrFZbFrsG6WUTugYRt7Pv4JopRLXgxENSxNNgah1Zo4jekkHViAEFFtsBpkfukuL8qn",
  "key24": "5zwMfuxHmYe4q3qZMfkBQnyCSEvtsobTiG4rUF4ZQLY3LMWYF1EV4GNm1N5h4aCQ9bZXbmHacHjUqx6S22EQKedG",
  "key25": "5KAZKmkUNQAYQVqVg5xYe88vQcpUmNDroxXYbmtmm54MexZnDLUpjPqqSF74GHEcSTmPAJ222Q1CVkbUZN712C1G",
  "key26": "3b4riGKmNzb7qnkD7zb7z6xSTiHZ6V9HbR2p9VCMNPY4Fn5kfMp8gTW5d7zzLZ9SuyUHE9PDyNLwfpcm6StCeg4b",
  "key27": "4UKvLJTDUxSkihzAjQiZHwFKDG88ZgTiU4BekVzDnECsAKYbnnssFK8cvzw7dyatFmS36UQjHPLASoXQALH7o4b4",
  "key28": "5uB7FTW2bVEpGR23icu1iuNvNFoxJtrao21ekqKEvD7bwj5haZWcawVq99zm9bmHpUPsvdYBm7wWHfh4tp56wf4g",
  "key29": "aHWuTFCKS5iX7MoPT75fmZwAckb33QCdbAGXP1PBLC7HBZ8ttBSHKN183DbKqUBLrHvnnRaCpTr4p19J8DmyYJg",
  "key30": "JoUnBYgGTMSfPgx8XuMTkJXCJEgUjZQXTU21SeyESpBr1LeiVDRfAGdToxH6uq7NvV7wyDtFaj4jHcnBvXbCDTx",
  "key31": "3H9yZx8vBaf6Ln6zwepGvpg8AsJ5bdMruaJ1zUwU3yEwAJFBxS3qU9yGViX8p6AuaYL4kx47fBovsEvkUmc6UQ3w",
  "key32": "5GzPCvJUKWRpP4ydBpGuAHLqAA7Vs49AMmjhPdBvFmDwrx6Wk8GjJy7guLuSGCPLtyPKoNfDAZBTSLeo66oDktW8",
  "key33": "MqTM9shYPKvfYPeXHs6ZYKUVRvNthankBDmsVzfamroYtRrjKsEQNTpd1fTXj2tgA9wazWoFzjDZqTyVQ5assAc",
  "key34": "4Ntb6BcVcVCwukFnB2MhNZGpwRseQCfGjn6pCTm5BH8aPQGGiDn7TwyE89UVW9rLUdeeZYMJY31kxwBM2MhemyEG",
  "key35": "C4uH1hdyEZFgFodA1f5f9LNeYuzWjL1QSfoLhX63FYE7bS3srirTUgJk9jUkt4jMejdz1sYYxrPSNQCsDDPpxxb",
  "key36": "3dxj4pxEEEswJbWxep8sx7ZkaDaj4gBK34NUDFho3cGRrNhrhztRUEE3ushZf5dC6wApAz6E21aAbr1G9JC4bSgj",
  "key37": "3uuNw6m2zEzMiMPoPyDVsxZ5JnogqcvSybjmfi2MEokYreavdfnz2gE7DekkCG5vk1wcKuWRwPJYJrvFzR8pSBe",
  "key38": "2V5LsP1rhWYG3FqppDHWCfDUYbG66QPcBqdK2FivAkGYmWe8KycDQuHaeWrpDWYD6tBQsFFs9fuxJJWcJMr5Kg7b",
  "key39": "39cM7rjCh8De4oarEhcCNiTn8jU3cUv67MEN2vDZTuXvKKg3xrLw2787Fs6XuSPGUzmi2t6HWdW7vaVP6YoaP9Rh",
  "key40": "4a1pC7VM2pkCdyVT3222iSYd9ZRhmkgNrwZty76MJnnTmpggZhUNwcDtkrNZ3ZG4zquKQ6fztqYBLURQRaSnqy1",
  "key41": "3u6dNwe3G1GFMkA1BtjyUPw3uRUVTpsuPyXLtLgYPJmBvT5YBobMtAjmrU9TTcBtsa5s63D4XcNFd5E7JAjrUwDp",
  "key42": "jSk85TWAMjtCsskf2UxLLzP8LYai1NjGTeU7Eg81sHR7NVtu6QHSJeM4r4BVsH6qmZM4b77C72zbePLwHNLXbJP",
  "key43": "5XsXZXWKYxApNMRRKVuniTDM6TsHSpQRXZiBEsC1F69XLboPtdmUz99wT3HPmvxsRVivrU4usNcZ53xRjGjri4Z6",
  "key44": "2HWQPsTPignLCY39kW3aXqWcBC6kofXVjzLVq24mNbza8pUqzQC393YAQ3mniaWRJ59HCFjJxFme6fGqMXDPTrb1",
  "key45": "9kVrBNuyew3LH3rUmBod1PvKCkrtTQTjkBL25ZyxCCcFmGmYkC5SseyhQjKDAr4KjcfhNknJALpmMunK4kPPsnS",
  "key46": "5fRzUnwvivX2hnvpzDjD4Bc5heTFmzALTiZMzMKTa4SnFdq5synADv8F7qrRZVT2UjWtLJuDHRo99cjTvVSpmeES",
  "key47": "2GijkqSWxD8ezygXZ2jkhyeCU6UxyA8ytDrkTbVmR7gBfeHDB8x7q5ySptBunG43mbt6knEfpn9ozadnz3QQ8vfK"
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
