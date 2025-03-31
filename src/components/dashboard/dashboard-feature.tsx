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
    "5b6t8AJRFn4Ld9kVuV5xWmHc4TSEvgb8hRAU1r2zGXoXfcpDqdstvH61ix3Wh8SC7tzkZ7YQYE5D5PzStFkrrY5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZUH1D4iXx759PZdGkWNqouT3zeW3h9ekAr4Hpx3F9ZmG8WCTkxjgAEw3nXnvRBFS3tRyEbCNzXuKy6a5Et2Bo4m",
  "key1": "4ZdUomKerGfn3Nj4GvYgYfuidNU5FmaDF47PnzuAWBfsYcz7WrhhjU6c2xUw6pdnDdvt9rkwgNMGf8hULQY1A1sp",
  "key2": "5GY7ESJ9TKPaPpsXqYFEjygoeMKDkSxqcYDTBt7WbzVqed2Vkw1zpHKodcXe7U1QJ3be6Ccq7AJFpU42KJ9jpYVe",
  "key3": "5hV9RsZvroV7pBJeDgaYq4HydKcBEgDWXtW1DsKsnp6K2Q2Z2qysTcfK7XyNcg97Ks3owH7JmgE6dFfitV5Gr3Fu",
  "key4": "3W7aouGFa3kvHNyBe9S4vgb2Ak5p7c2yt4JBFSXSAMC1vZDJD3EPxBhxFYPpMYMq3eKAtV3rswv1aDXv9CH8ocqw",
  "key5": "5vDd7b2x3aTErYaVpBmEY4T3fhPji727swwAi23foKDtSceVnTBDZXmSF1HxvU6wGWnt4kvopttY2hiTr1eBuK8r",
  "key6": "5ipgPTtvVqGEKEym6bhKA4m9cabqNFACLKJQdsZsGf1P9pufrRxhonGFTNmXi9dTEM94vua9ef4f3eLKgoSsJ8X1",
  "key7": "628PPnYfUfWN4Vqo3RzDy1mrutv8dhqA5RcTtBfr65vgwnYzeaLUZqcDP6yDWxQys7vnkostfzTjKWWqnG6k6qTK",
  "key8": "2p6G4yqquDosvTE3rAL9sbPd7rHvkfFexSGH8dPxhCn1HJp5DPSCNAT6NCbHihBcnu47zvqCYrgekTNJCggUCbGV",
  "key9": "5S9dsgnxRpMWCLZHwHghU2vquYvgtd7XKEc23NBfLPiyVqA3LAxtCAag2CgdtcFbXoRotuLRw6CRUj94SbEHmhVB",
  "key10": "BnZZRqPEKi5SQmPUwkwGhiFAuVy832A4GPieSDYakNnxqyARSb1a8ArQ2ZEGFmpkGGSrL1hALXmYjjaAm6bZbqG",
  "key11": "3fWnrPoCRb65G6cWMDcTWG4Gij1eM9fxwitH7kmjJdvLUJCwwANK4KHCjyfyCPo4n8S7gCVmUhnrLhURmJ7D4e5q",
  "key12": "5qvQ6Ti5P6yafhV7XFJJBwN12D7nA3bZhSMntvokHp84G15vX8T4Un5idvbokKCgyfUgdXaaqQSHs9Gr85F5s2nH",
  "key13": "WMGCVrHqiqaFE9sVR3ULmf3v9H7FsfVX4pciMteeLhgyQ6UNGPNChhc4YBsi7xZjEctgVCrnAnrsuAmLRL2GDYo",
  "key14": "4moVp8b6UM8wmCSxsJEHpnJGUL7wUPNk9HRjdYUpC76Qe9yKWN1DYtRyMh6mWsJUsCambjrGh6ahsQUyUhaifYLd",
  "key15": "4v8NLazFd6Qnm5dgdh3Bj1dmYSjxc4bvmQFDpVg12ZS12zZ6LNV4YtcGg97VM5dvw3QBgQYf8V1Y7qgw9SDENvcq",
  "key16": "3CdUgxaJWKMkLYdEjRUtLWyCQjNWT9m9FK77kP5C3ssg4pmbqbtsBcdS2CHa8oUw51GLETcctLLuhfJVfTjqKU1n",
  "key17": "4E25sftnUn8BvnfHdpVhuR1sUnuHZuH5GbFtQLX8thz3ncZkfVDxFbfVoVU5QgLaiSY4xqtM7dkMyRkju49HcGaB",
  "key18": "2kecLLHYcwb1aahqGeX6Fn81SBQbWmiWJWfceh53c9wYz6WW1Ttp8eXqrnGdzPeHbxB6HZzSLMyCpDxFKZifPYXN",
  "key19": "144WSsM9CrZB4zYnee4HCU9qGqiE2ZCajyYjudyrqV4SbDMcpaQU5exo7ZJxQbynsp7zfruCwHzRidxiXKrbVy5",
  "key20": "5BgZbumcQYcw2yBenFkS4r4yxdtf2EJMNWGp61yP79AVKLQEPsh1qLtKgehnVgfUsFBz17SBVd5MTE9mNUTbyV9j",
  "key21": "3wM1CYY1D7q7GR8KqFLgbbYcgQSZiioCsXaZ6BofTj5oxFTpsHs26arDsjir9Wr7miLvNDWvNP3vSRWM6PrQaKxQ",
  "key22": "65AfQCkA6k9cM4Rmu7dBkhpfsBqXWmsSXVbSEe7xggRNbvmVwPLbSgR74tpwpSKqCTdgaCbhbHZy61gxJeAiiZgK",
  "key23": "3y1o2MbzvgSmGrFbfjDHC2dS9MWtRMou9DviXB3pxiWAiNqFedgJ1cnL7FguXGbbqvWr32RDKCvJkuazUa9QrMr3",
  "key24": "4vbBy8yDTk61UZYrADikkTC3NtJvoicpj2z8z7wefXbQ877cos6bGKputgNUzyFAWEaHpdFoEEVcrtxxsJrp2omF",
  "key25": "46UpVws63aHvydpAyE6w5RNWq8GbsPX6xVCN2ewL7XQKSSGQ7EWnsHEnKbieJWhpmkH7fUuPqzgBgUVf8yrBdp9p",
  "key26": "518XQFN2jsDmxqmSV3mwa15QLy9mfHaFVLWSSkPWLCzwKVfbEjy9XFmCjvCvSsfoW8tP7qNfpuYGWajaTSvV7qN9",
  "key27": "2b6o421vGVLD8BuzsTAPE9dWDF4PrFhT4ecuqTCeAZbFMo2SNYSSJ7ferzXo3JBbgT5DHPAx4WshktutmVpiGm3R",
  "key28": "5pqLVquGrX7aBoaBF6FDZZZNb9Lj87b9vi961EgCHRtiPCrEFj9QVDtLNQfuaHoVkmQGXNBFVxQnNHKCh4Uc9nye",
  "key29": "5T5NqgiviiYGqkQ4Fori9Sq1hzJjMoYWL1DA4LGMfe7iqMTLN1qomBEpyDTRWrrcfXn5VHhSHuSDBX4kWnLZeCzi",
  "key30": "5X3NEsWmbKoUW6SfAbkesMg9KEMsQmpchCprenMh4cAYhudoZBdKZZYqdK9XQWsxxKszpddVejfGTLf7ipP8Xrz5",
  "key31": "5GgRzQyLkkaCzj6PvQBSjwXFES49vZhNYgwcRpk9EY1iqgu8FjxdMuvYWHvUVnpdPZPzVMq5w5vGBe1ZF8q9cnpb",
  "key32": "42qyxZGQZ146Um27ZgwZbDd2dNu1qcUyrBrpEq8NvSXuAvUuPFLMDa29gL6ZNQqQzFw7UJ8QN5DxV2y7C79wZgW5",
  "key33": "1uLCFXLUYni94oUQAVL2xkbRQ8tEguJCM7eFL7hDUVwdcC4mqCQR1Zifn2QEVu5UkRjg9iMZdnxaEpHEdR39Zxc",
  "key34": "2Er1HdqK5FvLudYV9P9Vw7MHXzbr8t5r9fxdX4covymUn5TBDU671UXNoDrPi1VqBiokrHeU9Q3JfGA2cGBqR3X8",
  "key35": "64pkmEuvNZ544QFJ5z5aUWfTfPRAnrg82vzkKfHUHP3Wd7M3CkRhhJBC3i7LB2kQ6yL2JEyx4ZY7EMmLjbD7yKmr",
  "key36": "3sG1cUY4yYRMhTTBmxpJrmMmfSYZB2pshePPRmqwvuF9hs4ok1eiohi1hAkixkZsnp8hsjFg2sj88uPFMRCMcRVJ",
  "key37": "4WJsiQXaVAMbUPEqKx3kqKv3smN8Te5ihGXCGauzHc21gA6qkcfkxKb1Etc8r3yVeNMPLJyWKB3rmksZy82cm5GL",
  "key38": "2cFpjig6oFTBr9h31RztsDqKDFyAUmBHL43WfVxdqQHUS8nAsph455AwYampY6AqxSrzwo4gayucr6zrYVvSoaia",
  "key39": "4TEWsGWnko83oBCWY1kZ2uK1X2Pzp4vgdtrKM7Wemqb4DPvh2QhvFmWh98QL66dB7h8GVkDNnkXQ7ACHJjGHkwxF",
  "key40": "4cUcTUL4ZhwsoLfRXJhj5L3BLyvFP65HPRgY1Bmne5LUVimP3La1cKHwDaxnizNzkzHdKzpzA1dsHvB8yYBjBqke",
  "key41": "2KDeXeyCeNWT4n93SGQqoDog68t5b1B5e7sYwPpQFn7P9inUJxDX6n3Q9SN7yxSZ3KQTUw6BwZucwm6ebsvLjE9P",
  "key42": "4Ej9wKtRLwawUyorKA4WbKbgrbf1GRsX6zdmt6kCVN3WSWFruun2oGGjvEoPjAC2XxB2FnrY4SqzaNLCr8FYzTsy",
  "key43": "4Dy6R1Gg1ZBENjxXHV3GCoRQgCVHuGgWGTLCCGU6MkcJtDckfhfpktja8bVvdbfmunef6oJezSc911ejTimJj2mw"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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